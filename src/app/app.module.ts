import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { MaterialModule } from './common/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { VisModule } from 'ng2-vis';

import { DialogService, DialogComponent, NotifyService } from 'services';
import { environment } from 'environments/environment';
import { AppComponent } from './app.component';
import { routes } from './routes';
import {
	DashboardComponent
} from 'pages';


@NgModule({
	declarations: [
		AppComponent,
		DialogComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		MaterialModule,
		RouterModule.forRoot(routes),
		SimpleNotificationsModule.forRoot(),
		FlexLayoutModule,
		NoopAnimationsModule,
		VisModule
	],
	providers: [
		DialogService,
		NotifyService
	],
	bootstrap: [AppComponent],
	entryComponents: [
		DialogComponent
	]
})
export class AppModule { }
