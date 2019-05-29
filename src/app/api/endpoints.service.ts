import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { BehaviorSubject } from 'rxjs';
@Injectable({

  providedIn: 'root'
})
export class EndpointsService {
  apiUrl = environment.baseURl;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  Adminlogin(user) {
    this.loggedIn.next(true);
    return this.http.post(this.apiUrl + `admin/login`, user);

  }
  logout() {
    this.loggedIn.next(false);
   localStorage.removeItem('token');

  }
  adminReg(payload) {
    return this.http.post(this.apiUrl + 'admin/register', payload);
  }


}
