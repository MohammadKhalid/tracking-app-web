import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';



import {CalendarModule} from 'primeng/calendar';

import { viewtaskRoutingModule } from './viewtask-routing.module';
import { viewtask } from './viewtask';
import { AddeditmodelComponent } from './addeditmodel/addeditmodel.component';



@NgModule({
  declarations: [viewtask , AddeditmodelComponent
  ],
  imports: [
    InputTextareaModule,
    CommonModule,
    viewtaskRoutingModule,
    InputMaskModule,
    FileUploadModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule ,
    TableModule,
    PaginatorModule,
    DialogModule,
    DynamicDialogModule,
    SplitButtonModule,
    DropdownModule,
    CalendarModule

    
    
  ],
  entryComponents:[AddeditmodelComponent]
})
export class viewtaskModule { }
