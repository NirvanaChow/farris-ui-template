import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpInputsComponent } from './cmp-inputs.component';

describe('CmpInputsComponent', () => {
  let component: CmpInputsComponent;
  let fixture: ComponentFixture<CmpInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
