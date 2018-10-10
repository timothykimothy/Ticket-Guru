import { Component, OnInit } from '@angular/core';
import { VenueShows } from 'src/types/types';
import { VenueService } from 'src/services/venue.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css', './../app.component.css']
})
export class TicketsComponent implements OnInit {

  venues: VenueShows[];
  constructor(private venueService: VenueService) { }

  ngOnInit() {
    this.venueService.getShowsPerVenue().subscribe( (venues)=> {
      this.venues = venues;
    })
  }

}
