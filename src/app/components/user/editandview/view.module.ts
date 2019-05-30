import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { viewRoutingModule } from './view-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';


import { view } from './view';
import { Addedit } from './addedit';
import { AddeditmodelComponent } from './addeditmodel/addeditmodel.component';



@NgModule({
  declarations: [view, AddeditmodelComponent
  ],
  imports: [
    CommonModule,
    viewRoutingModule,
    InputMaskModule,
    FileUploadModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule ,
    TableModule,
    PaginatorModule,
    DialogModule,
    DynamicDialogModule
    
    
  ],
  entryComponents:[AddeditmodelComponent]
})
export class viewModule { }
