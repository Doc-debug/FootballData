import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballDataService } from '../../../shared/data-access/football-data.service';
import { Team } from '../../../shared/data-access/team-data.model';
import {
  createErrorFromHttp,
  ErrorObject,
} from '../../../shared/ui/error-card/error-card.model';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss'],
})
export class TeamDetailsComponent {
  error?: ErrorObject;
  teamId?: string;
  teamData?: Team;

  constructor(
    private route: ActivatedRoute,
    private footballData: FootballDataService,
    private _location: Location
  ) {
    this.route.params.subscribe((params) => {
      this.teamId = params['id'];
      this.updateData();
    });
  }

  updateData() {
    this.clearError();
    if (!this.teamId) {
      this.error = this.createErrorNoDataGiven();
      return;
    }

    this.footballData.getTeam(this.teamId).subscribe({
      next: (data) => {
        this.teamData = data;
      },
      error: (error: HttpErrorResponse) => {
        this.error = createErrorFromHttp(error);
      },
    });
  }

  goBack() {
    this._location.back();
  }

  clearError() {
    this.error = undefined;
  }

  createErrorNoDataGiven(): ErrorObject {
    return {
      text: `No team ID provided`,
      type: 'info',
      title: 'No data provided',
    };
  }
}
