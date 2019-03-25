import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { NotfoundComponent } from './admin/notfound/notfound.component';
import { AngularModule } from './modules/angularmaterials/angular/angular.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminservicesService } from './admin/adminAuthservice/adminservices.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';









@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminpanelComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
    
  ],
  providers: [AdminservicesService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
