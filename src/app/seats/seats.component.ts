import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VenueService } from 'src/services/venue.service';
import { Venue, Performance, PerformanceLevels, SeatRequest, Reservation, Customer } from 'src/types/types';
import { PerformanceService } from 'src/services/performance.service';
import { ReservationService } from 'src/services/reservation.service';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css', './../app.component.css']
})
export class SeatsComponent implements OnInit {

  customer: Customer;
  performanceId: number;
  venueId: number;
  venue: Venue;
  performance: PerformanceLevels;
  seatRequests: SeatRequest[] = [];

  constructor(private route: ActivatedRoute, private sessionService: SessionService, private venueService: VenueService, 
    private router: Router, private performanceService: PerformanceService, private reservationService: ReservationService) { }

  ngOnInit() {
    //fetch values from route params
    this.performanceId = this.route.snapshot.params['performanceId'];
    this.venueId = this.route.snapshot.params['venueId'];

    this.customer = this.sessionService.getCurrentCustomer();

    this.venueService.getVenueInfo(this.venueId).subscribe((venue) => {
      this.venue = venue;
    });

    this.performanceService.getAvailabilityByPerformance(this.performanceId).subscribe((performance) => {
      this.performance = performance;
      this.performance.showTime = new Date(performance.showTime);
      this.performance.levels

      //instantiate seatRequests array
      this.performance.levels.forEach((level) => {
        this.seatRequests.push({
          level: {
            id: level.id
          },
          numSeats: 0
        });
      })
    });
  }

  isValidCart() {
    let hasValidValue: boolean;
    this.seatRequests.forEach((seatRequest) => {
      if(seatRequest.numSeats > 0) {
        hasValidValue = true;
      }
    });
    return hasValidValue;
  }
  onAddToCart(levelIndex: number, numSeatsToAdd: number) {
    if (this.seatRequests[levelIndex].numSeats + numSeatsToAdd <= this.performance.levels[levelIndex].seatsAvailable) {
      this.seatRequests[levelIndex].numSeats += numSeatsToAdd;
    }
  }
  removeLevel(levelIndex) {
    this.seatRequests[levelIndex].numSeats = 0;
  }

  makeReservation(){
    this.reservationService.makeReservation(this.customer.id, this.performanceId, this.seatRequests).subscribe( (response) =>{
      console.log(response);
      this.router.navigate(['/profile']);
    });
  }
}
