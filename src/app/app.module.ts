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
import { FilterlistComponent } from './components/track/list/filterlist/filterlist.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    View,
    MapComponent,
    FilterlistComponent
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

    FileUploadModule,
    CardModule,
    ToastrModule.forRoot()
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy, },
    EndpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }