import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { viewtask } from './viewtask';
import { TaskService } from '../task.service';



@NgModule({
  imports: [RouterModule.forChild([{
    path: '',
    component: viewtask
  }])],
  exports: [RouterModule],
  providers: [TaskService]
})
export class viewtaskRoutingModule { }
