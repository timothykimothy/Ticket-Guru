import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsComponent } from './seats.component';
import { Routes, RouterModule } from '@angular/router';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const seatsRoutes: Routes = [
	{
		path: '',
		component: SeatsComponent
	}
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(seatsRoutes)
  ],
  declarations: [SeatsComponent, SeatSelectionComponent]
})
export class SeatsModule { }
