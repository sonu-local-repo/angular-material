import { EmployeeModel } from './../model/employee.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {


  constructor(public http: HttpClient) { }

  getData(): Observable<EmployeeModel[]> {

    let headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNT09SRSIsImV4cCI6MTY2MjM4NzU2MywiaWF0IjoxNTc1OTg3NTYzfQ.wefxREkEacLt6U2ndNTdM8qtPOFc7xw6DgZuGOdMkpVRAkursVp1q3GDI50XNTsdYYKvWsnn5VQlKNJsa8_b3g'
    });
    return this.http.get<EmployeeModel[]>('http://18.221.204.143:8091/api/v1/org/employee/all', { headers });
  }

  getCustomer(id: number | string ): Observable<EmployeeModel> {
    return this.getData().pipe(
      map( customers => customers.find(customer => customer.id === +id))
    );
  }

}
