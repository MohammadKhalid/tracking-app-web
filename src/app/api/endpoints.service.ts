import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { BehaviorSubject, Observable } from 'rxjs';
import * as JWT from 'jwt-decode';
import { HttpHeaders } from '@angular/common/http';

@Injectable({

  providedIn: 'root'
})
export class EndpointsService {
  apiUrl = environment.baseURl;
  accessToken: string = localStorage.getItem('token');
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userLoggedIn = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }
  get userToken() {

    return JWT(this.accessToken);

  }
  get getUserId() {
    return JWT(this.accessToken).admin.id;
  }
  getLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }

  getLoggedInValue(): boolean {
    return this.userLoggedIn.getValue();
  }

  setLoggedIn(val: boolean) {
    this.userLoggedIn.next(val);
  }
  Adminlogin(user) {
    return this.http.post(this.apiUrl + `admin/login`, user);

  }
  logout() {
    // this.loggedIn.next(false);
    localStorage.removeItem('token');

  }
  adminReg(payload) {
    return this.http.post(this.apiUrl + 'admin/register', payload);
  }

  adduser(payload) {
    return this.http.post(this.apiUrl + 'user/create', payload)
  }

  editemployee(payload) {
    return this.http.put(this.apiUrl + `user/editemployee/${payload.id}`, payload)
  }

  viewalluser(token: any, id: any) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(this.apiUrl + `user/viewAllEmployee/${id}`, {
      headers: headers
    })
  }
}
