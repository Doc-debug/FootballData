import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'home-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @Output() dateChanged = new EventEmitter<Date>();
  datePickerForm = new FormControl<Date | null>(null);

  onChange() {
    if (!this.datePickerForm.value) return;
    console.log(this.datePickerForm.value);
    this.dateChanged.emit(this.datePickerForm.value);
  }
}
