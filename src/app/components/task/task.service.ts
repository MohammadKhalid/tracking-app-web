import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = environment.baseURl;

  constructor(private http: HttpClient) { }

  viewtask(payload, token) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(this.apiUrl + `task/viewEmployeeTask/${payload.datefrom}/${payload.dateto}/${payload.userId}`, {
      headers: headers
    })
  }

  viewalluser(token, id) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.apiUrl}user/viewAllEmployee/${id}`, {
      headers: headers
    })
  }
  assignTask(payload, token) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.post(this.apiUrl + 'task/assignTask', payload, {
      headers: headers
    })
  }
  edittask(payload) {
    return this.http.put(this.apiUrl + `task/editTask/${payload.id}`, payload)
  }
}
