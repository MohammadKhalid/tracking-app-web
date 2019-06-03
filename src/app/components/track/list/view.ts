import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import * as JWT from 'jwt-decode';
import { SelectItem } from 'primeng/api';

@Component({
  templateUrl: './view.html',
  styleUrls: ['./view.css']

})
export class View {

  display: boolean = false;
  cars: SelectItem[];
  constructor(private router: Router, private apiservice: EndpointsService) { }

  ngOnInit() {
    if (this.apiservice.userToken) {
      this.setLoggedIn(true);
      this.router.navigate([''])
    }
    else {
      this.setLoggedIn(false);
      this.router.navigate(['login'])
    }
  }
  private setLoggedIn(value: boolean): void {
    this.apiservice.setLoggedIn(value);
  }
}