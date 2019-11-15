import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpTabComponent } from './cmp-tab.component';

describe('CmpTabComponent', () => {
  let component: CmpTabComponent;
  let fixture: ComponentFixture<CmpTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
