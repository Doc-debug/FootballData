import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../../shared/data-access/football-data.model';
import { FootballDataService } from '../../../shared/data-access/football-data.service';
import {
  createErrorFromHttp,
  ErrorObject,
} from '../../../shared/ui/error-card/error-card.model';
import { stringToDate } from '../../../shared/utils/timeUtils';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss'],
})
export class MatchDetailsComponent {
  error?: ErrorObject;
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
    this.clearError();
    if (!this.matchId) {
      this.error = this.createErrorNoDataGiven();
      return;
    }

    this.footballData.getMatch(this.matchId).subscribe({
      next: (data) => {
        this.matchData = data;
        this.matchFinished = data.status === 'FINISHED';
      },
      error: (error: HttpErrorResponse) => {
        this.error = createErrorFromHttp(error);
      },
    });
  }

  getStatus(): string {
    return this.matchFinished ? 'Finished' : this.matchData?.minute + "'";
  }

  isWinner(team: 'home' | 'away'): boolean {
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

  clearError() {
    this.error = undefined;
  }

  createErrorNoDataGiven(): ErrorObject {
    return {
      text: `No match ID provided`,
      type: 'info',
      title: 'No data provided',
    };
  }
}
