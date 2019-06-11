import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = environment.baseURl;

  constructor(private http: HttpClient) { }

  Adminlogin(user) {
    return this.http.post(this.apiUrl + `admin/login`, user);

  }
}
