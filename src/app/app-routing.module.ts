import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { HomeComponent } from './components/home/home.component';
import { Part15Component } from './components/landingpage/part15/part15.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: Part15Component},
             {path: 'login', loadChildren: './components/login/login.module#loginModule'},
             {path: 'register', loadChildren: './components/register/register.module#registerModule'},
           {path: 'tasks', loadChildren: './components/tasks/addtasks/tasks.module#TasksModule'},
            {path: 'viewtask', loadChildren: './components/tasks/edittask/viewtask.module#ViewTaskModule'},
            {path: 'user/view', loadChildren: './components/user/list/view.module#viewModule'},
            ], {scrollPositionRestoration: 'enabled'})    
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}