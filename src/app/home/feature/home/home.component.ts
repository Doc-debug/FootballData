import { Component } from '@angular/core';
import { Competition } from '../../../shared/data-access/football-data.model';
import { FilterData } from '../../ui/filter/filter.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedCompetition: string = '';
  matchday: Date;
  competition: Competition;

  constructor() {}

  onFilterData(filterData: FilterData) {
    this.matchday = filterData.matchday;
    this.competition = filterData.competition;
    console.log('new data', this.matchday.getDate(), this.competition.name);
  }
}
