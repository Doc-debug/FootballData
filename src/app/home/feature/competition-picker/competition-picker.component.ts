import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';
import { Competition } from '../../../shared/data-access/football-data.model';
import { FootballDataService } from '../../../shared/data-access/football-data.service';

@Component({
  selector: 'home-competition-picker',
  templateUrl: './competition-picker.component.html',
  styleUrls: ['./competition-picker.component.scss'],
})
export class CompetitionPickerComponent implements OnInit {
  @Output() competitionChanged = new EventEmitter<Competition>();

  competitions: Competition[] = [];
  competitionForm = new FormControl('');
  filteredCompetitions: Observable<Competition[]> = of([]);

  constructor(private footballData: FootballDataService) {}

  ngOnInit(): void {
    this.footballData.getCompetitions().subscribe((data) => {
      this.competitions = data.competitions;
      this.filteredCompetitions = this.competitionForm.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
    });
  }
  private _filter(value: string): Competition[] {
    const filterValue = value.toLowerCase();

    return this.competitions.filter((competition) =>
      competition.name.toLowerCase().includes(filterValue)
    );
  }

  selectCompetition(competitionName: string): void {
    const selectedCompetition = this.competitions.find(
      (value) => value.name === competitionName
    );
    this.competitionChanged.emit(selectedCompetition);
  }

  clearInput() {
    this.competitionForm.setValue('');
  }
}
