import { Component, OnInit, Input } from '@angular/core';
import { VenueShows } from 'src/types/types';
import { PerformanceService } from 'src/services/performance.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-venue-card',
	templateUrl: './venue-card.component.html',
	styleUrls: ['./venue-card.component.css', './../../app.component.css']
})

export class VenueCardComponent implements OnInit {

	@Input() venue: VenueShows;
	performanceShowTimesMap: any; //maps showId -> PerformanceShowTime[]

	constructor(private performanceService: PerformanceService, private router: Router) {
		this.performanceShowTimesMap = {};
	}

	ngOnInit() {
		this.venue.shows.forEach((show) => {
			this.performanceShowTimesMap[show.id] = [];
			this.performanceService.getPerformancesByShowId(show.id).subscribe((performances) => {
				performances.forEach((performance) => {
					let date: Date = new Date(performance.showTime);
					let toAdd = {
						performanceId: performance.id,
						showTime: date.toLocaleString()
					}
					this.performanceShowTimesMap[show.id].push(toAdd);
				});
			});
		})
	}

	reserveSeats(performanceId: number): void {
		this.router.navigate(['/reserveSeats', {
			venueId: this.venue.id,
			performanceId: performanceId
		}]);
	}
}
