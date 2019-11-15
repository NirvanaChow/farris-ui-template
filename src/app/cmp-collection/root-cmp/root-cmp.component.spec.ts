import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCmpComponent } from './root-cmp.component';

describe('RootCmpComponent', () => {
  let component: RootCmpComponent;
  let fixture: ComponentFixture<RootCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
