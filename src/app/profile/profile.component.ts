import { Component, OnInit } from '@angular/core';
import { Customer, Reservation } from '../../types/types';
import { SessionService } from '../../services/session.service';
import { ReservationService } from 'src/services/reservation.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css', './../app.component.css']
})
export class ProfileComponent implements OnInit {

	customer: Customer;
	reservations: Reservation[];
	constructor(private sessionService: SessionService, private reservationService: ReservationService) { }

	ngOnInit() {
		this.customer = this.sessionService.getCurrentCustomer();
		this.reservationService.getReservationsForCustomer(this.customer.id).subscribe((reservations) => {
			this.reservations = reservations;
		});
	}
}
