import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { user } from './user';



@NgModule({
  imports: [RouterModule.forChild([{
    path:'',
    component: user
  }])],
  exports: [RouterModule]
})
export class UserRoutingModule { }
