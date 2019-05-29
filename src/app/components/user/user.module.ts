import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { user } from './user';

@NgModule({
  declarations: [user],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
