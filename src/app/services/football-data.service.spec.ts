/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FootballDataService } from './football-data.service';

describe('Service: FootballData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballDataService]
    });
  });

  it('should ...', inject([FootballDataService], (service: FootballDataService) => {
    expect(service).toBeTruthy();
  }));
});
