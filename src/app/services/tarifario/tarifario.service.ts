import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: "root"
})
export class TarifarioService {
  constructor(private http: HttpClient) {}
  getDataInit() {
    // const data = { params: { company_id: environment.user.company } };
    return this.http
      .get(`${environment.api.url}tarifario/create`)
  .pipe(response => {
        return response;
      });
  }
}
