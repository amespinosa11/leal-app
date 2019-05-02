import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from '../../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}`;

  constructor( private http: HttpClient ) { }

  login( loginCredentials: LoginCredentials ): any {
    const url = `${ this.apiUrl }api/user/login`;
    return this.http.post(url , loginCredentials);
  }

}
