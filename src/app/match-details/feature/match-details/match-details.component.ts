import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../../shared/data-access/football-data.model';
import { FootballDataService } from '../../../shared/data-access/football-data.service';
import { stringToDate } from '../../../shared/utils/timeUtils';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss'],
})
export class MatchDetailsComponent {
  matchId?: string;
  matchData?: Match;
  matchFinished?: boolean;

  stringToDate = stringToDate;

  constructor(
    private route: ActivatedRoute,
    private footballData: FootballDataService,
    private _location: Location
  ) {
    this.route.params.subscribe((params) => {
      this.matchId = params['id'];
      this.updateData();
    });
  }

  updateData() {
    if (!this.matchId) return;

    this.footballData.getMatch(this.matchId).subscribe({
      next: (data) => {
        this.matchData = data;
        this.matchFinished = data.status === 'FINISHED';
      },
      error: (error: HttpErrorResponse) => {},
    });
  }

  getStatus() {
    return this.matchFinished ? 'Finished' : this.matchData?.minute + "'";
  }

  isWinner(team: 'home' | 'away') {
    if (!this.matchData || !this.matchFinished) return false;
    const score = this.matchData.score.fullTime;
    if (team === 'home') {
      return score.home >= score.away;
    } else {
      return score.home <= score.away;
    }
  }

  goBack() {
    this._location.back();
  }
}
