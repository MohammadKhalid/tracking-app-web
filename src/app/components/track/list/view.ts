import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import * as JWT from 'jwt-decode';

@Component({
  templateUrl: './view.html',
  styleUrls: ['./view.css']

})
export class View {

    display: boolean = false;
    users : [];
  constructor(private authservice : EndpointsService) { }
 
  ngOnInit() {
    this.authservice.viewalluser(this.authservice.accessToken, this.authservice.getUserId).subscribe((res: any) => {
      this.users = res.data
    })
 

  }}