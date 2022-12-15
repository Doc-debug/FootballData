import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { isValidDateRange } from '../../../shared/utils/timeUtils';
import { DateRange } from './date-picker.model';

@Component({
  selector: 'home-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @Output() dateChanged = new EventEmitter<DateRange>();

  dateRangePickerForm = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  onChange() {
    const startDate = this.dateRangePickerForm.value.start;
    const endDate = this.dateRangePickerForm.value.end;

    if (!isValidDateRange(startDate, endDate)) {
      return;
    }

    this.dateChanged.emit({
      start: startDate!,
      end: endDate!,
    });
  }
}
