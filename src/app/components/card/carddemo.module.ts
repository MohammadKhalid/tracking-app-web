import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardDemo} from './carddemo';
import {CardDemoRoutingModule} from './carddemo-routing.module';
import {CardModule} from 'primeng/card';

@NgModule({
	imports: [
		CommonModule,
		CardDemoRoutingModule,
		CardModule
	],
	declarations: [
		CardDemo
	]
})
export class CardDemoModule {}
