import { Component, OnInit, Input } from '@angular/core';
import { Venue } from 'src/types/types';
import { PerformanceService } from 'src/services/performance.service';


@Component({
	selector: 'app-venue-card',
	templateUrl: './venue-card.component.html',
	styleUrls: ['./venue-card.component.css', './../../app.component.css']
})

export class VenueCardComponent implements OnInit {

	@Input() venue: Venue;
	performanceShowTimesMap: any; //maps showId -> PerformanceShowTime[]

	constructor(private performanceService: PerformanceService) {
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
}
