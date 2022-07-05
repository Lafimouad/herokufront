import { TestBed } from '@angular/core/testing';

import { ListNotificationService } from './list-notification.service';

describe('ListNotificationService', () => {
  let service: ListNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
