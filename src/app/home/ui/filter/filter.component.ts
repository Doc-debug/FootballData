import { Component, EventEmitter, Output } from '@angular/core';
import { Competition } from '../../../shared/data-access/football-data.model';
import { DateRange } from '../../feature/date-picker/date-picker.model';
import { FilterData } from './filter.model';

@Component({
  selector: 'home-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() onFilterDataComplete = new EventEmitter<FilterData>();
  matchday: DateRange;
  competition: Competition;
  autoUpdate: boolean = false;

  autoUpdateData(data: { matchday?: DateRange; competition?: Competition }) {
    if (data.matchday) this.matchday = data.matchday;
    if (data.competition) this.competition = data.competition;

    if (this.autoUpdate) this.updateData();
  }

  updateData() {
    if (this.matchday && this.competition) {
      this.onFilterDataComplete.emit({
        matchday: this.matchday,
        competition: this.competition,
      });
    }
  }
}
