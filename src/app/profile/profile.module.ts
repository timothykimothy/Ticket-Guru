import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const profileRoutes: Routes = [
	{
		path: '',
		component: ProfileComponent
	}
]

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		RouterModule.forChild(profileRoutes)
	],
	declarations: [ProfileComponent, ReservationCardComponent]
})
export class ProfileModule { }
