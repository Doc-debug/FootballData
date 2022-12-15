import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { offsetDate, toISODateString } from '../utils/timeUtils';
import { CompetitionData, Match, MatchData } from './football-data.model';

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

  getMatch(id: string | number) {
    return this.http.get<Match>(`${this.baseUrl}/matches/${id}`, {
      headers: this.headerGenerator(),
    });
  }

  getMatches(
    competitions: number,
    dateFrom: Date,
    dateTo?: Date
  ): Observable<MatchData> {
    if (!dateTo) {
      dateTo = offsetDate({ days: 1 }, dateFrom);
    } else {
      dateTo = offsetDate({ days: 1 }, dateTo);
    }

    let params = new HttpParams();
    params = params.append('competitions', competitions);
    params = params.append('dateFrom', toISODateString(dateFrom));
    params = params.append('dateTo', toISODateString(dateTo));

    return this.http.get<MatchData>(`${this.baseUrl}/matches`, {
      headers: this.headerGenerator(),
      params: params,
    });
  }
}
