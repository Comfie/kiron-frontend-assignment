/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SceneManagerService } from './scene-manager.service';

describe('Service: SceneManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceneManagerService]
    });
  });

  it('should ...', inject([SceneManagerService], (service: SceneManagerService) => {
    expect(service).toBeTruthy();
  }));
});
