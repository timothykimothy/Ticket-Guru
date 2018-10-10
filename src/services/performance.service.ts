import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Performance, PerformanceLevels } from 'src/types/types';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  readonly BACKEND_URL: string = environment.BACKEND_URL;

  constructor(private httpClient: HttpClient) { }

  getPerformance(performanceId: number): Observable<Performance> {
    return this.httpClient.get<Performance>(this.BACKEND_URL + 'performances/' + performanceId, {
      params: {
        include: "show"
      }
    });
  }

  getPerformancesByShowId(showId: number): Observable<Performance[]> {
    return this.httpClient.get<Performance[]>(this.BACKEND_URL + 'performances', {
      params: {
        showId: showId.toString(),
        include: "show"
      }
    });
  }

  getAvailabilityByPerformance(performanceId: number): Observable<PerformanceLevels> {
    return this.httpClient.get<PerformanceLevels>(this.BACKEND_URL + 'performances/' + performanceId + "/availability", {
      params: {
        include: "show"
      }
    });
  }
}
