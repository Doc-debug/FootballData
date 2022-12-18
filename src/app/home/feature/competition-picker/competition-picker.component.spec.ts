import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
import { AppRoutingModule } from '../../../app-routing.module';

import { CompetitionPickerComponent } from './competition-picker.component';

describe('CompetitionPickerComponent', () => {
  let component: CompetitionPickerComponent;
  let fixture: ComponentFixture<CompetitionPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetitionPickerComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatAutocompleteModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CompetitionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
