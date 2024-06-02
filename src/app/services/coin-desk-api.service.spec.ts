/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoinDeskApiService } from './coin-desk-api.service';

describe('Service: CoinDeskApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinDeskApiService]
    });
  });

  it('should ...', inject([CoinDeskApiService], (service: CoinDeskApiService) => {
    expect(service).toBeTruthy();
  }));
});
