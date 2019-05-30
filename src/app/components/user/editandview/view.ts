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
export class view {

 list:[];

  constructor(private toaster: ToastrService, private authService: EndpointsService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
  






  }
 
}