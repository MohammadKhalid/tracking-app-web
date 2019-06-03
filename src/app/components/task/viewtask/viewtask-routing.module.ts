import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { viewtask } from './viewtask';



@NgModule({
  imports: [RouterModule.forChild([{
    path:'',
    component: viewtask
  }])],
  exports: [RouterModule]
})
export class viewtaskRoutingModule { }
