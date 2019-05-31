import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { tasks } from './tasks';
import { InputMaskModule } from 'primeng/inputmask';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';




@NgModule({
  declarations: [tasks],
  imports: [
    CommonModule,
    TasksRoutingModule,
    InputMaskModule,
    FileUploadModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextareaModule,
    ButtonModule,
    
  ]
})
export class TasksModule { }
