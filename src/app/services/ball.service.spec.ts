import { TestBed } from '@angular/core/testing';

import { BallService } from './ball.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BallService', () => {
  let service: BallService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(BallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
