import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const loginRoutes: Routes = [
	{
		path: '',
		component: LoginComponent
	}
]
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(loginRoutes)
	],
	declarations: [LoginComponent]
})
export class LoginModule { }
