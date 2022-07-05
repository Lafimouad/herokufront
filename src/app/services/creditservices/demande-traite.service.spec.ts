import { TestBed } from '@angular/core/testing';

import { DemandeTraiteService } from './demande-traite.service';

describe('DemandeTraiteService', () => {
  let service: DemandeTraiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeTraiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
