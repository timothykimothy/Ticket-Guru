import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets.component';
import { Routes, RouterModule } from '@angular/router';
import { VenueCardComponent } from './venue-card/venue-card.component';

const ticketsRoutes: Routes = [
	{
		path: '',
		component: TicketsComponent
	}
]
@NgModule({
  imports: [
		CommonModule,
		RouterModule.forChild(ticketsRoutes)
  ],
  declarations: [TicketsComponent, VenueCardComponent]
})
export class TicketsModule { }
