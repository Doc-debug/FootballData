import { Component, Input, OnChanges } from '@angular/core';
import { Sort } from '@angular/material/sort';
import {
  Competition,
  Match,
  Score,
} from '../../../shared/data-access/football-data.model';
import { FootballDataService } from '../../../shared/data-access/football-data.service';
import { stringToDate } from '../../../shared/utils/timeUtils';
import { compare, isAnyNull } from '../../../shared/utils/validators';
import { DateRange } from '../date-picker/date-picker.model';

@Component({
  selector: 'home-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.scss'],
})
export class MatchTableComponent implements OnChanges {
  @Input() matchday: DateRange;
  @Input() competition: Competition;
  displayedColumns: string[] = ['homeTeam', 'awayTeam', 'score', 'kickOff'];
  matches?: Match[];
  unsortedMatches?: Match[];

  noDataError: boolean = false;

  stringToDate = stringToDate;

  constructor(private footballData: FootballDataService) {}

  ngOnChanges(): void {
    if (this.matchday && this.competition) {
      this.updateData();
    }
  }

  updateData(): void {
    this.noDataError = false;
    this.footballData
      .getMatches(this.competition.id, this.matchday.start, this.matchday.end)
      .subscribe((data) => {
        if (data.matches.length > 0) {
          this.matches = data.matches;
          this.unsortedMatches = data.matches;
        } else {
          this.matches = undefined;
          this.noDataError = true;
        }
      });
  }

  formatScore(score: Score): string {
    if (isAnyNull(score.away, score.home)) {
      return `- : -`;
    }
    return `${score.home} : ${score.away}`;
  }

  sortData(sort: Sort) {
    const data = this.matches?.slice();
    if (!data || !sort.active || sort.direction === '') {
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
}
