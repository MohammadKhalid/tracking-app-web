import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { user } from './user';
import { InputMaskModule } from 'primeng/inputmask';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [user],
  imports: [
    CommonModule,
    UserRoutingModule,
    InputMaskModule,
    FileUploadModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule 
    
  ]
})
export class UserModule { }
