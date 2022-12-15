import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionPickerComponent } from './competition-picker.component';

describe('CompetitionPickerComponent', () => {
  let component: CompetitionPickerComponent;
  let fixture: ComponentFixture<CompetitionPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
