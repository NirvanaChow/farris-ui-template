import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownKdComponent } from './dropdown-kd.component';

describe('DropdownKdComponent', () => {
  let component: DropdownKdComponent;
  let fixture: ComponentFixture<DropdownKdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownKdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownKdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
