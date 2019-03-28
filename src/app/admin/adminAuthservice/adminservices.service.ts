import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { User } from '../adminInterface/user'
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class AdminservicesService {

  apiUrl = environment.baseURl;


  constructor(private http: HttpClient) { }

  Adminlogin(user) {
    return this.http.post(this.apiUrl + `admin/login`, user);

  }

  adduser(payload) {
    return this.http.post(this.apiUrl + 'employee/addemployee', payload)
  }

  getallusers(token: any) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + token);

    return this.http.get(this.apiUrl + 'employee/viewAllEmployee', {
      headers: headers
    })
  }



  assignTask(payload, token){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.post(this.apiUrl +'task/assignTask',payload,{
      headers:headers
    })
  }
}
