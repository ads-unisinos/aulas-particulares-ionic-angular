import { TestBed } from '@angular/core/testing';

import { AulaPartService } from './aula-part.service';

describe('AulaPartService', () => {
  let service: AulaPartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AulaPartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
