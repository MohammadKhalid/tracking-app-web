import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { View } from './components/track/list/view';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: View },
            { path: 'login', loadChildren: './components/login/login.module#loginModule' },
            { path: 'register', loadChildren: './components/register/register.module#registerModule' },
            { path: 'user/view', loadChildren: './components/user/list/view.module#viewModule' },
            { path: 'task/view', loadChildren: './components/task/viewtask/viewtask.module#viewtaskModule' },
             ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }