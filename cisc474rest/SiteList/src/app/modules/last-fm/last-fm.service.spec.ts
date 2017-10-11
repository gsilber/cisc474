import { TestBed, inject } from '@angular/core/testing';

import { LastFmService } from './last-fm.service';

describe('LastFmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastFmService]
    });
  });

  it('should be created', inject([LastFmService], (service: LastFmService) => {
    expect(service).toBeTruthy();
  }));
});
