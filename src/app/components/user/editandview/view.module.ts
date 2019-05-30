import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { viewRoutingModule } from './view-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';

import { view } from './view';



@NgModule({
  declarations: [view],
  imports: [
    CommonModule,
    viewRoutingModule,
    InputMaskModule,
    FileUploadModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule ,
    TableModule
    
  ]
})
export class viewModule { }
