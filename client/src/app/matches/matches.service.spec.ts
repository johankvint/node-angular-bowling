import { TestBed } from '@angular/core/testing';

import { MatchesService } from './matches.service';
import { HttpClientModule } from '@angular/common/http';

describe('MatchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: MatchesService = TestBed.get(MatchesService);
    expect(service).toBeTruthy();
  });
});
