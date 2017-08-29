import { Routes } from '@angular/router'

import {
	DashboardComponent
} from 'pages';


export const routes: Routes = [
	{ path: '', component: DashboardComponent, pathMatch: 'full' },
	{ path: '**', redirectTo: '' }
]
