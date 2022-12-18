import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionPickerComponent } from './home/feature/competition-picker/competition-picker.component';
import { DatePickerComponent } from './home/feature/date-picker/date-picker.component';
import { HomeComponent } from './home/feature/home/home.component';
import { MatchTableComponent } from './home/feature/match-table/match-table.component';
import { FilterComponent } from './home/ui/filter/filter.component';
import { MatchDetailsComponent } from './match-details/feature/match-details/match-details.component';
import { ErrorCardComponent } from './shared/ui/error-card/error-card.component';
import { LoadingSpinnerComponent } from './shared/ui/loading-spinner/loading-spinner.component';
import { TeamDetailsComponent } from './team-details/feature/team-details/team-details.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FootballData'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FootballData');
  });
});
