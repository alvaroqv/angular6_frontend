import { TestBed, inject } from '@angular/core/testing';

import { SorteiosService } from './sorteios.service';

describe('SorteiosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SorteiosService]
    });
  });

  it('should be created', inject([SorteiosService], (service: SorteiosService) => {
    expect(service).toBeTruthy();
  }));
});
