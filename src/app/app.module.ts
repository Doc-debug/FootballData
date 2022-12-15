import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionPickerComponent } from './home/feature/competition-picker/competition-picker.component';
import { DatePickerComponent } from './home/feature/date-picker/date-picker.component';
import { HomeComponent } from './home/feature/home/home.component';
import { MatchTableComponent } from './home/feature/match-table/match-table.component';
import { FilterComponent } from './home/ui/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetitionPickerComponent,
    DatePickerComponent,
    FilterComponent,
    MatchTableComponent,
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
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
