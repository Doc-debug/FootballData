import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
} from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../../../app-routing.module';
import { AppComponent } from '../../../app.component';
import { MatchDetailsComponent } from '../../../match-details/feature/match-details/match-details.component';
import { ErrorCardComponent } from '../../../shared/ui/error-card/error-card.component';
import { LoadingSpinnerComponent } from '../../../shared/ui/loading-spinner/loading-spinner.component';
import { TeamDetailsComponent } from '../../../team-details/feature/team-details/team-details.component';
import { FilterComponent } from '../../ui/filter/filter.component';
import { CompetitionPickerComponent } from '../competition-picker/competition-picker.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { MatchTableComponent } from '../match-table/match-table.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatAutocompleteModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatSortModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatExpansionModule,
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        CompetitionPickerComponent,
        DatePickerComponent,
        FilterComponent,
        MatchTableComponent,
        MatchDetailsComponent,
        ErrorCardComponent,
        TeamDetailsComponent,
        LoadingSpinnerComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
