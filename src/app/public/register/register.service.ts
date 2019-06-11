import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = environment.baseURl;
  constructor(private http: HttpClient) { }

  adminReg(payload) {
    return this.http.post(this.apiUrl + 'admin/register', payload);
  }
}
