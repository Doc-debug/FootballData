import { Component } from '@angular/core';
import { Competition } from '../../../shared/data-access/football-data.model';
import { FilterData } from '../../ui/filter/filter.model';
import { DateRange } from '../date-picker/date-picker.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedCompetition: string = '';
  matchday: DateRange;
  competition: Competition;

  constructor() {}

  onFilterData(filterData: FilterData) {
    this.matchday = filterData.matchday;
    this.competition = filterData.competition;
  }
}
