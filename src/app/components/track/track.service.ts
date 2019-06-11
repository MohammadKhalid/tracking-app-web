import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  apiUrl = environment.baseURl;

  constructor(private http: HttpClient) { }

  viewalluser(token, id) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.apiUrl}user/viewAllEmployee/${id}`, {
      headers: headers
    })
  }
  getAttendance(payload, token) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(this.apiUrl + `attendance/getAttendance/${payload.userId}/${payload.fromDate}/${payload.toDate}`, {
      headers: headers
    })
  }
  viewEmployeeTrack(payload, token) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.apiUrl}tracking/getUserTrack/${payload.userId}/${payload.toDate}`, {
      headers: headers
    })
  }
}
