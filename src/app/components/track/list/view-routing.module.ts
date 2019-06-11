import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View } from './view';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  imports: [RouterModule.forChild([{
    path:'',
    component: View
  }]),
  AgmCoreModule.forRoot({
    apiKey:'AIzaSyAohZ7btYPVl4_ABdRmMOO7t2Jo9cQF7s4'
  }),
],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
