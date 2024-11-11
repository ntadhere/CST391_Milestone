import { TestBed } from '@angular/core/testing';

import { TigercaveServiceService } from './tigercave-service.service';

describe('TigercaveServiceService', () => {
  let service: TigercaveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TigercaveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
