import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { BehaviorSubject, Observable } from 'rxjs';
import * as JWT from 'jwt-decode';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({

  providedIn: 'root'
})
export class EndpointsService {
  apiUrl = environment.baseURl;
  accessToken: string = localStorage.getItem('token');
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userLoggedIn = new BehaviorSubject(false);
  constructor(private http: HttpClient,
    private router: Router) { }
  authorizeUser() {
    if (this.userToken) {
   
       if(this.router.url == "/login" || this.router.url == "/register"){
        this.router.navigate(['']);
      }
      this.setLoggedIn(true);
    }
    else {
      if (!(this.router.url == "/login" || this.router.url == "/register")) {
        this.router.navigate(["login"]);
      }
      else {
        this.router.navigate([this.router.url]);

      }
      this.setLoggedIn(false);
    }
  }
  getAccessToken() {
    return this.accessToken = localStorage.getItem('token');
  }
  get userToken() {
    if (this.getAccessToken()) {
      return JWT(this.accessToken);
    }
    else {
      return "";
    }
  }

  set setUserToken(data) {
    localStorage.setItem('token', data);
  }
  get getUserId() {
    return JWT(this.getAccessToken()).admin.id;
  }
  get getUserName() {
    return JWT(this.getAccessToken()).admin.firstName;
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

  logout() {
        localStorage.removeItem('token');
  }
 }
