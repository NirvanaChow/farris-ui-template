import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavKendoComponent } from './nav-kendo.component';

describe('NavKendoComponent', () => {
  let component: NavKendoComponent;
  let fixture: ComponentFixture<NavKendoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavKendoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavKendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
