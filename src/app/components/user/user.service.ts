import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.baseURl;
  constructor(private http: HttpClient) { }

  adduser(payload) {
    return this.http.post(this.apiUrl + 'user/create', payload)
  }

  editemployee(payload) {
    return this.http.put(this.apiUrl + `user/editemployee/${payload.id}`, payload)
  }
}
