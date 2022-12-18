import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorCardComponent } from '../../../shared/ui/error-card/error-card.component';
import { LoadingSpinnerComponent } from '../../../shared/ui/loading-spinner/loading-spinner.component';

import { MatchDetailsComponent } from './match-details.component';

describe('MatchDetailsComponent', () => {
  let component: MatchDetailsComponent;
  let fixture: ComponentFixture<MatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MatchDetailsComponent,
        LoadingSpinnerComponent,
        ErrorCardComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        MatCardModule,
        MatExpansionModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
