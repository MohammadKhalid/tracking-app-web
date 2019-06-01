import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View } from './view';



@NgModule({
  imports: [RouterModule.forChild([{
    path:'',
    component: View
  }])],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
