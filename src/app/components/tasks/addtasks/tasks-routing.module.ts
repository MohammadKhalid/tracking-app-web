import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { tasks } from './tasks';



@NgModule({
  imports: [RouterModule.forChild([{
    path:'',
    component: tasks
  }])],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
