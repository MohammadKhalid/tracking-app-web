import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTask } from './viewTask';
import { TaskService } from '../task.service';



@NgModule({
  imports: [RouterModule.forChild([{
    path: '',
    component: ViewTask
  }])],
  exports: [RouterModule],
  providers: [TaskService]
})
export class ViewTaskRoutingModule { }
