import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../../shared/data-access/team-data.model';
import { FootballDataService } from '../../../shared/data-access/football-data.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss'],
})
export class TeamDetailsComponent {
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
    if (!this.teamId) return;

    this.footballData.getTeam(this.teamId).subscribe({
      next: (data) => {
        this.teamData = data;
      },
      error: (error: HttpErrorResponse) => {},
    });
  }

  goBack() {
    this._location.back();
  }
}
