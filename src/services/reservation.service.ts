import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reservation } from 'src/types/types';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  readonly BACKEND_URL: string = environment.BACKEND_URL;

  constructor(private httpClient: HttpClient) { }

  getReservationsForCustomer(customerId: number): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.BACKEND_URL + 'reservations', {
      params: {
        customerId: customerId.toString(),
        include: "seats"
      }
    });
  }

  confirmReservation(customerId: number): Observable<Reservation> {
    return this.httpClient.patch<Reservation>(this.BACKEND_URL + 'reservations/' + customerId, {
      reservationConfirmed: true
    });
  }
}
