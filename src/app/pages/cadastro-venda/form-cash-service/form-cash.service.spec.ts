import { TestBed } from '@angular/core/testing';

import { FormCashService } from '../../cadastro-vendas/form-cash.service';

describe('FormCashService', () => {
  let service: FormCashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
