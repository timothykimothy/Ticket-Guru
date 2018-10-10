import { Component, OnInit, Input } from '@angular/core';
import { Reservation, Performance } from 'src/types/types';
import { PerformanceService } from 'src/services/performance.service';
import { ReservationService } from 'src/services/reservation.service';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent implements OnInit {

  @Input() reservation: Reservation;
  performance: Performance;
  constructor(private reservationService: ReservationService, private performanceService: PerformanceService) { }

  ngOnInit() {
    let performanceId = this.reservation.seats[0].performanceId;
    this.performanceService.getPerformance(performanceId).subscribe( (performance) => {
      this.performance = performance;
      this.performance.showTime = new Date(performance.showTime);
    });
  }

  confirmReservation() {
    this.reservationService.confirmReservation(this.reservation.id).subscribe( (reservation) =>{
      this.reservation = reservation;
    })
  }
}
