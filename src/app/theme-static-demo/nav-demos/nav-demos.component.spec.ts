import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDemosComponent } from './nav-demos.component';

describe('NavDemosComponent', () => {
  let component: NavDemosComponent;
  let fixture: ComponentFixture<NavDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
