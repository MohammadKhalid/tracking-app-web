import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import * as JWT from 'jwt-decode';
import { MenuItem } from 'primeng/components/common/menuitem';





@Component({
  templateUrl: './viewtask.html',
  styleUrls: ['./viewtask.css']
 
})
export class ViewTask {
  users:[];
  items: MenuItem[];
  constructor(private toaster: ToastrService, private authService: EndpointsService, private router: Router, private formbuilder: FormBuilder) { }
  ngOnInit() {
     this.authService.viewalluser(this.authService.userToken, this.authService.getUserId).subscribe((res: any) => {
      this.users = res.data;
      console.log(res.data);
    })

      this.items = [
          {label: 'Update', icon: 'pi pi-refresh', command: () => {
              this.update();
          }},
          {label: 'Delete', icon: 'pi pi-times', command: () => {
              this.delete();
          }},
          // {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
          // {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
      ];
}

save(severity: string) {

}

update() {

}

delete() {
  
}

}