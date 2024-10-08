import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import {
  Competition,
  Match,
  Score,
} from '../../../shared/data-access/football-data.model';
import { FootballDataService } from '../../../shared/data-access/football-data.service';
import {
  createError,
  createErrorFromHttp,
  ErrorObject,
} from '../../../shared/ui/error-card/error-card.model';
import {
  getSessionStorage,
  removeSessionStorageKey,
  setSessionStorage,
} from '../../../shared/utils/storage';
import { dateDifference, stringToDate } from '../../../shared/utils/timeUtils';
import { compare, isAnyNull } from '../../../shared/utils/validators';
import { competitionStorageKey } from '../competition-picker/competition-picker.component';
import { matchdayStorageKey } from '../date-picker/date-picker.component';
import { DateRange } from '../date-picker/date-picker.model';

@Component({
  selector: 'home-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.scss'],
})
export class MatchTableComponent implements OnChanges, OnInit {
  @Input() matchday: DateRange;
  @Input() competition: Competition;

  displayedColumns: string[] = ['homeTeam', 'awayTeam', 'score', 'kickOff'];
  matches?: Match[];
  unsortedMatches?: Match[];
  loadingData: boolean = false;
  error?: ErrorObject;
  showMultipleDates: boolean = false;

  constructor(
    private footballData: FootballDataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getDataFromSessionStorage();
  }

  ngOnChanges(): void {
    if (this.matchday && this.competition) {
      this.updateData();
    }
  }

  updateData(): void {
    if (!this.competition || !this.matchday) {
      this.error = createError('No Data provided', 'error');
      return;
    }
    this.updateDataInSessionStorage();
    this.clearError();
    this.loadingData = true;
    this.footballData
      .getMatches(this.competition.id, this.matchday.start, this.matchday.end)
      .subscribe({
        next: (data) => {
          if (data.matches.length > 0) {
            this.matches = data.matches;
            this.unsortedMatches = data.matches;
            this.showMultipleDates =
              dateDifference(this.matchday.start, this.matchday.end, 'days') >
              0;
          } else {
            this.matches = undefined;
            this.error = this.createErrorNoData();
            this.clearSessionStorage();
          }
          this.loadingData = false;
        },
        error: (error: HttpErrorResponse) => {
          this.matches = undefined;
          this.loadingData = false;
          this.error = createErrorFromHttp(error);
          this.clearSessionStorage();
        },
      });
  }

  sortData(sort: Sort) {
    const data = this.matches?.slice();
    if (!data || !sort.active || sort.direction === '') {
      this.matches = this.unsortedMatches;
      return;
    }

    const isAsc = sort.direction === 'asc';
    this.matches = data.sort((a, b) => {
      switch (sort.active) {
        case 'homeTeam':
          return compare(a.homeTeam.name, b.homeTeam.name, isAsc);
        case 'awayTeam':
          return compare(a.awayTeam.name, b.awayTeam.name, isAsc);
        case 'score':
          return compare(a.score.fullTime.home, b.score.fullTime.home, isAsc);
        case 'kickOff':
          return compare(a.utcDate, b.utcDate, isAsc);
        default:
          return 0;
      }
    });
  }

  formatScore(score: Score): string {
    if (isAnyNull(score.away, score.home)) {
      return `- : -`;
    }
    return `${score.home} : ${score.away}`;
  }

  formatDate(dateString: string): string {
    const date = stringToDate(dateString);
    if (this.showMultipleDates) {
      return date.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        hour12: false,
      });
    } else {
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
  }

  clearError() {
    this.error = undefined;
  }

  createErrorNoData() {
    return {
      text: `No data for ${
        this.competition.name
      } between ${this.matchday.start.toLocaleDateString()} and ${this.matchday.end.toLocaleDateString()}`,
      type: 'info',
      title: 'No data found',
    };
  }

  navigateTo(match: Match) {
    this.router.navigate(['/match/' + match.id]);
  }

  updateDataInSessionStorage() {
    setSessionStorage(matchdayStorageKey, this.matchday);
    setSessionStorage(competitionStorageKey, this.competition);
  }
  clearSessionStorage() {
    removeSessionStorageKey(matchdayStorageKey);
    removeSessionStorageKey(competitionStorageKey);
  }
  getDataFromSessionStorage() {
    const matchday = getSessionStorage(matchdayStorageKey) as DateRange;
    const competition = getSessionStorage(competitionStorageKey) as Competition;

    if (matchday && competition) {
      this.matchday = {
        start: new Date(matchday.start),
        end: new Date(matchday.end),
      };
      this.competition = competition;
      this.updateData();
    }
  }
}
