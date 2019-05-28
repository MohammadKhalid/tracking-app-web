import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  apiUrl = environment.baseURl;

  constructor(private http: HttpClient) { }

  Adminlogin(user) {
    return this.http.post(this.apiUrl + `admin/login`, user);

  }
  adminReg(payload) {
    return this.http.post(this.apiUrl + 'admin/register', payload);
  }


}
