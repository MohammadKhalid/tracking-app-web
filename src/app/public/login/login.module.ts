import {NgModule}     from '@angular/core';
import {CommonModule,} from '@angular/common';

import {login} from './login';
import {LoginRoutingModule} from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from './login.service';


@NgModule({
	imports: [
		CommonModule,
		LoginRoutingModule,
		FormsModule,
		ReactiveFormsModule
		
	],
	declarations: [
		login
	],
	providers : [
		LoginService
	]
})
export class loginModule {}
