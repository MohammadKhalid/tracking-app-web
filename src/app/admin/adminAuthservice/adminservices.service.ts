import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { User} from '../adminInterface/user'

@Injectable({
  providedIn: 'root'
})


export class AdminservicesService {

 apiUrl = environment.baseURl;


  constructor(private http : HttpClient) { }

Adminlogin(user){
  return this.http.post( this.apiUrl+`admin/login`, user);
   
}

adduser(payload) {
  return this.http.post(this.apiUrl +'employee/addemployee',payload)
}


}
