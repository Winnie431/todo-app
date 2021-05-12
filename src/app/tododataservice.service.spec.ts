import { TestBed } from '@angular/core/testing';

import { TododataserviceService } from './shared/tododataservice.service';

describe('TododataserviceService', () => {
  let service: TododataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TododataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
