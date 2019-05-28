import {NgModule}     from '@angular/core';
import {CommonModule,} from '@angular/common';

import {login} from './login';
import {LoginRoutingModule} from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
	imports: [
		CommonModule,
		LoginRoutingModule,
		FormsModule,
		ReactiveFormsModule
		
	],
	declarations: [
		login
	]
})
export class loginModule {}
