import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { view } from './view';



@NgModule({
  imports: [RouterModule.forChild([{
    path:'',
    component: view
  }])],
  exports: [RouterModule]
})
export class viewRoutingModule { }
