import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { register } from './register';



@NgModule({
  imports: [RouterModule.forChild([{
    path:'',
    component:register
  }])],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
