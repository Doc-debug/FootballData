import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Competition } from '../../../shared/data-access/football-data.model';
import {
  getSessionStorage,
  setSessionStorage,
} from '../../../shared/utils/storage';
import { DateRange } from '../../feature/date-picker/date-picker.model';
import { FilterData } from './filter.model';

@Component({
  selector: 'home-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() onFilterDataComplete = new EventEmitter<FilterData>();

  autoUpdateStorageKey: string = 'AUTO_UPDATE_ENABLED';
  matchday: DateRange;
  competition: Competition;
  autoUpdate: boolean = false;

  ngOnInit(): void {
    this.autoUpdate = getSessionStorage(this.autoUpdateStorageKey) ?? false;
  }

  autoUpdateToggle() {
    // todo: variable updates too late => instable?
    setSessionStorage(this.autoUpdateStorageKey, !this.autoUpdate);
    if (!this.autoUpdate) this.updateData();
  }

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
