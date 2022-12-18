import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FootballDataService } from './football-data.service';

describe('FootballDataService', () => {
  let service: FootballDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(FootballDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
