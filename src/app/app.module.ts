import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StepsModule } from 'primeng/steps';
import { InputMaskModule } from 'primeng/inputmask';
import { View } from './components/track/list/view';
import { EndpointsService } from './api/endpoints.service';
import { MapComponent } from './components/track/list/map/map.component';
import { FilterListComponent } from './components/track/list/filterList/filterList.component';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {ScrollPanelModule} from 'primeng/scrollpanel'; 
import {GMapModule} from 'primeng/gmap';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    View,
    MapComponent,
    FilterListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    StepsModule,
    InputMaskModule,
    CalendarModule,
    FileUploadModule,
    CardModule,
    DropdownModule,
    ScrollPanelModule,
    GMapModule, 
     AgmCoreModule.forRoot({
      apiKey:'AIzaSyAohZ7btYPVl4_ABdRmMOO7t2Jo9cQF7s4'
    }),
    

    ToastrModule.forRoot()
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy, },
    EndpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }