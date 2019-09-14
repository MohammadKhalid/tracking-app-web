import { Component, OnInit, Input } from '@angular/core';
import { EndpointsService } from 'src/app/api/endpoints.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { TrackService } from '../../track.service';
declare var google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() attendanceRowData: any
  @Input() isListrender: boolean;
  options: any;

  overlays: any[];
  lat: any;
  lng: any;
  marker: any[]
  public latitude: number;
  public longitude: number;
  public zoom: number;
  previous;
  pointStr: string;
  isCheckout: boolean = false;
  mapCenter: any;

  constructor(private trackService: TrackService,
    private toaster: ToastrService,
    private http: HttpClient,
    private globalService: EndpointsService
  ) { }

  getStyle(): object {
    console.log('getstyle: ' + this.isListrender);
    if (this.isListrender) {
      return { width: '100%', height: 'calc(100vh - 420px)' }
    }
    else {
      return { width: '100%', height: 'calc(100vh - 300px)' }
    }
  }
  ngOnInit() {
    // if (navigator) {
    //   navigator.geolocation.getCurrentPosition(pos => {
    //     this.mapCenter = { lat: pos.coords.longitude, lng: pos.coords.latitude };
    //     // this.options = {
    //     //   center: { lat: pos.coords.longitude, lng: pos.coords.latitude },
    //     //   zoom: 15,
    //     // };
    //   })
    // }
    // else {
    //   this.options = {
    //     center: { lat: 51.5285582, lng: -0.2416814 },
    //     // center: { lat: 25.1921465, lng: 66.5949955 },
    //     zoom: 6
    //   };
    // }
    // setTimeout(() => {
    //   debugger;
    //   this.options = {
    //     center: { lat: 51.5285582, lng: -0.2416814 },
    //     // center: { lat: 25.1921465, lng: 66.5949955 },
    //     zoom: 6
    //   };
    // }, 0);

    this.options = {
      // center: new google.maps.LatLng(51.5285582, -0.2416814),
      center: { lat: 36.879466, lng: 30.667648 },
      zoom: 6
    };
    // this.overlays = [
    //   new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: "Konyaalti" }),
    //   new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: "Ataturk Park" }),

    //   new google.maps.Polyline({ path: [{ lat: 36.86149, lng: 30.63743 }, { lat: 36.86341, lng: 30.72463 }], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2 })
    // ];

  }

  setMap(event) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.mapCenter = { lat: pos.coords.longitude, lng: pos.coords.latitude };
        // this.options = {
        //   center: { lat: pos.coords.longitude, lng: pos.coords.latitude },
        //   zoom: 15,
        // };
        event.map.panTo(new google.maps.LatLng({ lat: 25.1921465, lng: 66.5949955 }));
      })
    }
    // event.map.setCenter({ lat: this.mapCenter.lat, lng: this.mapCenter.lng })
    // let center = new google.maps.LatLng(this.mapCenter.lat, this.mapCenter.lng);
    // event.map.panTo(new google.maps.LatLng(center));
    // this.map = event.map;
  }
  Attendence(payload) {

    this.trackService.viewEmployeeTrack(payload, this.globalService.getAccessToken()).subscribe((res: any) => {
      this.marker = [];
      this.pointStr = "";
      debugger;
      this.setpolylines(res);
    })
  }
  setpolylines(res: any) {

    if (res.data.length == 0) {
      this.toaster.error(res.message);
    }
    else {
      let positionMarkerStartPoint = { lat: '', lng: '' };
      let positionMarkerEndPoint = { lat: '', lng: '' };
      let polylineMarker = [];
      res.data.forEach(el => {
        let latLng = { lat: Number, lng: Number };
        latLng.lat = el.latitude;
        latLng.lng = el.longitude;
        polylineMarker.push(latLng);
      });
      positionMarkerStartPoint.lat = res.data[0].latitude;
      positionMarkerStartPoint.lng = res.data[0].longitude;

      positionMarkerEndPoint.lat = res.data[res.data.length - 1].latitude;
      positionMarkerEndPoint.lng = res.data[res.data.length - 1].longitude;

      this.options = {
        // center: { lat: 25.1921465, lng: 66.5949955 },
        zoom: 12
      };
      this.overlays = [
        new google.maps.Marker({ position: positionMarkerStartPoint, title: "Check In" }),
        new google.maps.Marker({ position: positionMarkerEndPoint, title: "Check Out" }),

        new google.maps.Polyline({ path: polylineMarker, geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2 })
      ];

    }
  }
}

