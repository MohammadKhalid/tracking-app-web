import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-part10',
  templateUrl: './part10.component.html',
  styleUrls: ['./part10.component.css']
})
export class Part10Component implements OnInit {
token = localStorage.getItem('token');
  constructor( private route : Router, private toaster : ToastrService) { }
 
  ngOnInit() {
   
  }
 
check() {
  if(!this.token){
    this.route.navigate(['login'])

  }else if(this.token) {
    this.route.navigate(['adminpanel'])
    this.toaster.info('You are already logged in')
  }

}
}
