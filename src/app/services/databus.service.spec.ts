import { TestBed } from '@angular/core/testing';

import { DatabusService } from './databus.service';
// import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DatabusService', () => {
  let service: DatabusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(DatabusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dataBus sendData', () => {
    const data = 'test';
    service.sendData(data);
  });

});
