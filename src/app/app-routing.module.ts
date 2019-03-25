import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { NotfoundComponent } from './admin/notfound/notfound.component';

const routes: Routes = [

  {
    path:'',
    component:AdminloginComponent
  },
  {
    path :'adminpanel',
    component:AdminpanelComponent
  },
  {
    path:"**",
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
