import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTask } from './viewtask';



@NgModule({
  imports: [RouterModule.forChild([{
    path:'',
    component: ViewTask
  }])],
  exports: [RouterModule]
})
export class ViewTaskRoutingModule { }
