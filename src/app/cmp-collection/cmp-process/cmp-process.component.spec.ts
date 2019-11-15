import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpProcessComponent } from './cmp-process.component';

describe('CmpProcessComponent', () => {
  let component: CmpProcessComponent;
  let fixture: ComponentFixture<CmpProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
