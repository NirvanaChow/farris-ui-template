import { TestBed } from '@angular/core/testing';

import { OuterWizardService } from './outer-wizard.service';

describe('OuterWizardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OuterWizardService = TestBed.get(OuterWizardService);
    expect(service).toBeTruthy();
  });
});
