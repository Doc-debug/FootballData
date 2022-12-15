import { Component, EventEmitter, Output } from '@angular/core';
import { Competition } from '../../../shared/data-access/football-data.model';
import { FilterData } from './filter.model';

@Component({
  selector: 'home-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() onFilterDataComplete = new EventEmitter<FilterData>();
  matchday: Date;
  competition: Competition;

  updateData(data: { matchday?: Date; competition?: Competition }) {
    if (data.matchday) this.matchday = data.matchday;
    if (data.competition) this.competition = data.competition;
    
    if (this.matchday && this.competition) {
      this.onFilterDataComplete.emit({
        matchday: this.matchday,
        competition: this.competition,
      });
    }
  }
}
