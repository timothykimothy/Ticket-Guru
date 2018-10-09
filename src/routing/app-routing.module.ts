import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionService } from '../services/session.service';

const appRoutes: Routes = [
	{
		path: 'login',
		loadChildren: '../app/login/login.module#LoginModule',

	},
	{
		path: 'profile',
		loadChildren: '../app/profile/profile.module#ProfileModule',
		canActivate: [SessionService]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes,{enableTracing: true})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }