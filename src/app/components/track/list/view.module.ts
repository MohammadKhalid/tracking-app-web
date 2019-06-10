import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

import { AgmCoreModule } from '@agm/core';

import { View } from './view';
import { MapComponent } from './map/map.component';
import { TrackService } from '../track.service';
import { FilterListComponent } from './filterList/filterList.component';

@NgModule({
  declarations: [View, MapComponent, FilterListComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    InputMaskModule,
    FileUploadModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    DialogModule,
    DynamicDialogModule,
    // AgmCoreModule.forRoot({
    //   apiKey:'AIzaSyAohZ7btYPVl4_ABdRmMOO7t2Jo9cQF7s4'
    // }),
  ],
  providers: [TrackService],
  entryComponents: []
})
export class viewModule { }
