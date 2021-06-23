/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OnTableService } from './OnTable.service';

describe('Service: OnTable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnTableService]
    });
  });

  it('should ...', inject([OnTableService], (service: OnTableService) => {
    expect(service).toBeTruthy();
  }));
});
