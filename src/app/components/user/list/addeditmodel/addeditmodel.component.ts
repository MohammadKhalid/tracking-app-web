import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsService } from 'src/app/api/endpoints.service';
import { ToastrService } from 'ngx-toastr';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-addeditmodel',
  templateUrl: './addeditmodel.component.html',
  styleUrls: ['./addeditmodel.component.css']
})
export class AddeditmodelComponent implements OnInit {
  addUserform: FormGroup
  constructor(private router: Router,
    private globalservice: EndpointsService,
    private userSeruvce: UserService,
    private formbuilder: FormBuilder,
    private toaster: ToastrService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig) { }
  token: string;
  btnTxt: string;
  isEdit: boolean = false;

  ngOnInit() {
    this.token = this.globalservice.getUserId;

    // this.btnTxt =
    this.addUserform = this.formbuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      phone: new FormControl(''),
      adminId: [this.token],
      id: ""

    })
    if (this.config.data) {
      this.addUserform.controls['firstname'].setValue(this.config.data.firstName);
      this.addUserform.controls['lastname'].setValue(this.config.data.lastName);
      this.addUserform.controls['email'].setValue(this.config.data.email);
      this.addUserform.controls['phone'].setValue(this.config.data.phone);
      this.addUserform.controls['id'].setValue(this.config.data.id);
      this.config.header = "Udate User";
      this.addUserform.get('password').setValidators([]);
      this.btnTxt = "Update";
      this.isEdit = false;
    }
    else {
      this.config.header = "Add User";
      this.btnTxt = "Add";
      this.isEdit = true;

    }    // let test = this.config.data.id;

  }
  userAddEdit() {
    console.log(this.addUserform.value);
    if (this.addUserform.valid) {
      if (this.addUserform.value.id == "") {
        this.userSeruvce.adduser(this.addUserform.value).subscribe((res: any) => {
          if (res.code == 200) {
            this.toaster.success(res.message);
            this.ref.close()
          } else {
            this.toaster.error(res.message);
          }
        })
      }
      else {
        this.userSeruvce.editemployee(this.addUserform.value).subscribe((res: any) => {
          if (res.code == 200) {
            this.toaster.success(res.message);
            this.ref.close()
          } else {
            this.toaster.error(res.message);
          }
        })
      }
    }
 
  }
}
