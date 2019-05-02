import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiUrl = `${environment.apiUrl}`;

  constructor( private http: HttpClient ) { }

  getTransactions( startDate: any, endDate: any ) {
    const url = `${ this.apiUrl }api/user/my/transactions`;
    const token = sessionStorage.getItem('token');
    console.log(token);

    const HEADERS = new HttpHeaders({
      Authorization: `Bearer ${ token }`
    });

    return this.http.get(url , { headers: HEADERS })
            .pipe( map ( (response: any) => response.data ));
  }

}
