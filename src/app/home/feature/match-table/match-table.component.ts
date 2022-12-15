import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  Competition,
  Match,
  Score,
} from '../../../shared/data-access/football-data.model';
import { FootballDataService } from '../../../shared/data-access/football-data.service';
import { stringToDate } from '../../../shared/utils/timeUtils';
import { isAnyNull } from '../../../shared/utils/validators';

@Component({
  selector: 'home-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.scss'],
})
export class MatchTableComponent implements OnChanges, OnInit {
  @Input() matchday: Date;
  @Input() competition: Competition;
  displayedColumns: string[] = ['homeTeam', 'awayTeam', 'score', 'kickOff'];
  matches: MatTableDataSource<Match> = new MatTableDataSource<Match>([]);

  noDataError: boolean = false;

  stringToDate = stringToDate;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private footballData: FootballDataService) {}
  
  ngOnInit(): void {
    this.matches.sort = this.sort;
  }

  ngOnChanges(): void {
    if (this.matchday && this.competition) {
      this.updateData();
    }
  }

  updateData(): void {
    this.noDataError = false;
    this.footballData
      .getMatches(this.matchday, this.competition.id)
      .subscribe((data) => {
        if (data.matches.length > 0) {
          this.matches.data = data.matches;
        } else {
          this.matches.data = [];
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
}
