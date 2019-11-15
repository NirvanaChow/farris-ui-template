import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpBtnsComponent } from './cmp-btns.component';

describe('CmpBtnsComponent', () => {
  let component: CmpBtnsComponent;
  let fixture: ComponentFixture<CmpBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
