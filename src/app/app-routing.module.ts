import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { NotfoundComponent } from './admin/notfound/notfound.component';
import { AdduserComponent } from './admin/adminpanel/adduser/adduser.component';
import { AlluserComponent } from './admin/adminpanel/alluser/alluser.component';
import { AssignScheduleComponent } from './admin/adminpanel/schedules/assign-schedule/assign-schedule.component';

const routes: Routes = [

  {
    path:'',
    component:AdminloginComponent
  },
  {
    path :'adminpanel',
    component:AdminpanelComponent,
    children : [
      {
        path:'adduser',
        component:AdduserComponent
      },
      {
        path:'alluser',
        component:AlluserComponent
      },
      {
        path: 'assignschedule',
        component:AssignScheduleComponent
      }
    ]
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
