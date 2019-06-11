import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { View } from './components/track/list/view';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: View },
            { path: 'login', loadChildren: './public/login/login.module#loginModule' },
            { path: 'register', loadChildren: './public/register/register.module#registerModule' },
            { path: 'user/view', loadChildren: './components/user/list/view.module#viewModule' },
            { path: 'task/view', loadChildren: './components/task/viewTask/viewTask.module#viewTaskModule' },
             ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }