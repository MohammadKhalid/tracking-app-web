import { Component, OnInit, Input } from '@angular/core';
import { EndpointsService } from 'src/app/api/endpoints.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() attendanceRowData: any

  lat: any;
  lng: any;
  marker: any[]
  public latitude: number;
  public longitude: number;
  public zoom: number;
  previous;
  pointStr: string;
  isCheckout: boolean = false;
  constructor(private authService: EndpointsService, private toaster : ToastrService,private http: HttpClient) { }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude
        this.lat = +pos.coords.latitude
      })
    }
  }
  

  Attendence(payload){
    
    this.authService.viewEmployeeTrack(payload, this.authService.getAccessToken()).subscribe((res: any) => {
      this.marker = [];
      this.pointStr = "";
      this.setpolylines(res);
     
    })
  }
  

  setpolylines(res: any) {
    debugger
    if(res.data.length == 0){
      this.toaster.error(res.message)
    }else{

       
        // if (res.data[res.data.length - 1]['tbl_Attenence.Status'] == 'CheckedOut') {
        for (let i in res.data) {
          this.pointStr += res.data[i].latitude + ',' + res.data[i].longitude + '|'
        }
        console.log(res.data)
        this.pointStr = this.pointStr.substring(0, this.pointStr.length - 1);
  
        this.http.get(`https://roads.googleapis.com/v1/snapToRoads?path=${this.pointStr}&key=AIzaSyAohZ7btYPVl4_ABdRmMOO7t2Jo9cQF7s4`).subscribe((snapRes: any) => {
        snapRes.snappedPoints.map(raw => {
        res.data.map(raw => {
          this.marker.push({
            Lattitude: raw.latitude,
            Longitude: raw.longitude,
          })
        })
         })
      //  else {
  
      //   res.data.forEach(el => {
  
      //     this.marker.push({
      //       Lattitude: el.Lattitude,
      //       Longitude: el.Longitude,
      //       description: el.tbl_Attenence ? el.tbl_Attenence.status : (el.tbl_schedule) ? el.tbl_schedule.Status : "on route"
      //       // description: (el['tbl_Attenence.Status'] != null) ? el['tbl_Attenence.Status'] : (el['tbl_schedule.Status'] != null) ? res.data['tbl_schedule.Status'] : "on route"
      //     })
  
        });
      // }
    }

    // res.data.map(raw => {
    //   this.marker.push({
    //     Lattitude: raw.location.latitude,
    //     Longitude: raw.location.longitude,
    //   })
    // })


  }
}

