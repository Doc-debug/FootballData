import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { offsetDate, toISODateString } from '../utils/timeUtils';
import { CompetitionData, MatchData } from './football-data.model';

@Injectable({
  providedIn: 'root',
})
export class FootballDataService {
  constructor(private http: HttpClient) {}

  token = environment.apiKey;
  baseUrl = '/api';

  headerGenerator(): HttpHeaders {
    return new HttpHeaders({
      'X-Auth-Token': this.token,
    });
  }

  getCompetitions(): Observable<CompetitionData> {
    return this.http.get<CompetitionData>(`${this.baseUrl}/competitions/`, {
      headers: this.headerGenerator(),
    });
  }

  getMatches(matchday: Date, competitions: number): Observable<MatchData> {
    let params = new HttpParams();
    params = params.append('competitions', competitions);
    params = params.append('dateFrom', toISODateString(matchday));
    params = params.append(
      'dateTo',
      toISODateString(offsetDate({ days: 1 }, matchday))
    );

    return this.http.get<MatchData>(`${this.baseUrl}/matches`, {
      headers: this.headerGenerator(),
      params: params,
    });
  }
}
