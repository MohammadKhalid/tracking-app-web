import { Component, OnInit, Input } from '@angular/core';
import { EndpointsService } from 'src/app/api/endpoints.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private authService: EndpointsService, private toaster : ToastrService) { }

  ngOnInit() {
    
  }
  

  Attendence(payload){
    
    this.authService.viewEmployeeTrack(payload, this.authService.getAccessToken()).subscribe((res: any) => {
      this.marker = [];
      this.pointStr = "";
      this.setpolylines(res);
     
    })
  }
  

  setpolylines(res: any) {
    debugger;
    let status = res.data[res.data.length - 1].tbl_Attenence ? res.data[res.data.length - 1].tbl_Attenence.Status : null;
    if (status == 'CheckedOut') {
      // if (res.data[res.data.length - 1]['tbl_Attenence.Status'] == 'CheckedOut') {
      for (let data in res.data) {
        this.pointStr += res.data[data].Lattitude + ',' + res.data[data].Longitude + '|'
      }
      console.log(res.data)
      this.pointStr = this.pointStr.substring(0, this.pointStr.length - 1);

      // this.http.get(`https://roads.googleapis.com/v1/snapToRoads?path=${this.pointStr}&key=AIzaSyC-lBXEXkbbh2hvhZrpn2Q2snVKacI05WQ`).subscribe((snapRes: any) => {
      // snapRes.snappedPoints.map(raw => {
      res.data.map(raw => {
        this.marker.push({
          Lattitude: raw.Lattitude,
          Longitude: raw.Longitude,
          description: raw.tbl_Attenence ? raw.tbl_Attenence.status : (raw.tbl_schedule) ? raw.tbl_schedule.Status : "on route"
          // description: (raw['tbl_Attenence.Status'] != null) ? raw['tbl_Attenence.Status'] : (raw['tbl_schedule.Status'] != null) ? res.data['tbl_schedule.Status'] : "ERROR AGAYA"
        })
      })
      //  })
    } else {

      res.data.forEach(el => {

        this.marker.push({
          Lattitude: el.Lattitude,
          Longitude: el.Longitude,
          description: el.tbl_Attenence ? el.tbl_Attenence.status : (el.tbl_schedule) ? el.tbl_schedule.Status : "on route"
          // description: (el['tbl_Attenence.Status'] != null) ? el['tbl_Attenence.Status'] : (el['tbl_schedule.Status'] != null) ? res.data['tbl_schedule.Status'] : "on route"
        })

      });
    }

    // res.data.map(raw => {
    //   this.marker.push({
    //     Lattitude: raw.location.latitude,
    //     Longitude: raw.location.longitude,
    //   })
    // })


  }
}

