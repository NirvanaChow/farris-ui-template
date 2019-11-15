import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpListComponent } from './cmp-list.component';

describe('CmpListComponent', () => {
  let component: CmpListComponent;
  let fixture: ComponentFixture<CmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
