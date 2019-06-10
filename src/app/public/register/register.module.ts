import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { register } from './register';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterService } from './register.service';


@NgModule({
  declarations: [ register],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterService
  ],
})
export class registerModule { }
