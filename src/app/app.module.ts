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

import { Part15Component } from './components/landingpage/part15/part15.component';
import { Part10Component } from './components/landingpage/part10/part10.component';
import { Part11Component } from './components/landingpage/part11/part11.component';
import { Part12Component } from './components/landingpage/part12/part12.component';
import { Part13Component } from './components/landingpage/part13/part13.component';
import { Part14Component } from './components/landingpage/part14/part14.component';
import { EndpointsService } from './api/endpoints.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Part15Component,
    Part10Component,
    Part11Component,
    Part12Component,
    Part13Component,
    Part14Component
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
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    EndpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }