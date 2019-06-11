import { Component, OnInit, Input } from '@angular/core';
import { EndpointsService } from 'src/app/api/endpoints.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { TrackService } from '../../track.service';

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
  constructor(private trackService: TrackService,
    private toaster: ToastrService,
    private http: HttpClient,
    private globalService: EndpointsService
  ) { }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude
        this.lat = +pos.coords.latitude
      })
    }
  }
  Attendence(payload) {
    this.trackService.viewEmployeeTrack(payload, this.globalService.getAccessToken()).subscribe((res: any) => {
      this.marker = [];
      this.pointStr = "";
      this.setpolylines(res);
    })
  }
  setpolylines(res: any) {
    if (res.data.length == 0) {
      this.toaster.error(res.message)
    } else {
      for (let i in res.data) {
        this.pointStr += res.data[i].latitude + ',' + res.data[i].longitude + '|'
      }
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

      });
    }
  }
}

