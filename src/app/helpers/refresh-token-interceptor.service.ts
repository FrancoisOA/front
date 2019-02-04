import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap, finalize, filter, take } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenInterceptorService implements HttpInterceptor {
  private refreshTokenInProgress: boolean = false;
  private refreshTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  
  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | 
                                                                      HttpProgressEvent | HttpResponse<any> | 
                                                                      HttpUserEvent<any> | any> {
    request = this.addTokenToRequest(request);
    return next.handle(request)
                .pipe(catchError(error => {
                  if(error instanceof HttpErrorResponse) {
                    switch ((<HttpErrorResponse>error).status) {
                      case 401:
                        return this.handle401Error(request, next);
                      case 400:
                        return <any>this.auth.logout();
                    }
                  }else {
                    return throwError(error);
                  }
                }));
  }

  private addTokenToRequest(request: HttpRequest<any>) : HttpRequest<any> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if(currentUser && currentUser.access_token) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.access_token}`
        }
      })
    }

    return request;
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if(!this.refreshTokenInProgress) {
      this.refreshTokenInProgress = true;
      this.refreshTokenSubject.next(null);
      
      return this.auth.refreshAccessToken()
                      .pipe(
                        switchMap(response => {
                          if(response && response.access_token){
                            this.refreshTokenSubject.next(response.access_token);
                            //localStorage.setItem('currentUser', JSON.stringify(response));
                            //return next.handle(this.addTokenToRequest(request, response.access_token))
                            return next.handle(this.addTokenToRequest(request))
                          }
                          return <any>this.auth.logout();
                        }),
                        catchError(error => {
                          return <any>this.auth.logout();
                        }),
                        finalize(() => {
                          this.refreshTokenInProgress = false;
                        })
                      );
    }else {
      this.refreshTokenInProgress = false;

      return this.refreshTokenSubject
                  .pipe(
                    filter(access_token => access_token != null),
                    take(1),
                    switchMap(() => next.handle(this.addTokenToRequest(request)))
                  )
    }
  }
}
