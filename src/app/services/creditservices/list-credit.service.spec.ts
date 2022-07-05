import { TestBed } from '@angular/core/testing';

import { ListCreditService } from './list-credit.service';

describe('ListCreditService', () => {
  let service: ListCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
