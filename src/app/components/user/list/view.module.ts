import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { viewRoutingModule } from './view-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


import { view } from './view';
import { TaskService } from '../../task/task.service';
import { UserService } from '../user.service';
import { AddEditModelComponent } from './addEditModel/addEditModel.component';
// import { AddEditModelComponent } from '../list/addEditModel/addeditmodel.component';



@NgModule({
  declarations: [view, AddEditModelComponent
  ],
  imports: [
    CommonModule,
    viewRoutingModule,
    InputMaskModule,
    FileUploadModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    DialogModule,
    DynamicDialogModule


  ],
  providers: [TaskService, UserService],
  entryComponents: [AddEditModelComponent]
})
export class viewModule { }
