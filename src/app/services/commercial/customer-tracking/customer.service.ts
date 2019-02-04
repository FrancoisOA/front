import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../../../models/commercial/customer-tracking/Customer';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
	public newCustomerSubject = new Subject<any>();
	public seeCommentsSubject = new Subject<any>();
  constructor(private http: HttpClient) { }

  getAllCustomers(user_id: any) {
    return this.http.get<any>(`${environment.api.url}commercial/customer-tracking/user/${user_id}/clients`);
  }
  addCustomer(customer: Customer) {
  	this.newCustomerSubject.next(customer);
  }
  seeCommentsByCustomer(customer: Customer) {
  	this.seeCommentsSubject.next(customer);
  }
  save(customer: Customer) {
    return this.http.post<any>(`${environment.api.url}commercial/customer-tracking/clients`, customer)
      .pipe(map(response => {
      	return response;
      })
    );
  }
}
