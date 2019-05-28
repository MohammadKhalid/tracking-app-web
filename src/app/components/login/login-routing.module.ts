import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import {login} from './login';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: login}
		])
	],
	exports: [
		RouterModule
	]
})
export class LoginRoutingModule {}
