import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Venue } from 'src/types/types';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  readonly BACKEND_URL: string = environment.BACKEND_URL;

  constructor(private httpClient: HttpClient) { }

  getShowsPerVenue(): Observable<Venue[]> {
    return this.httpClient.get<Venue[]>(this.BACKEND_URL + 'venues', {
      params: {
        include: "shows"
      }
    });
  }
}
