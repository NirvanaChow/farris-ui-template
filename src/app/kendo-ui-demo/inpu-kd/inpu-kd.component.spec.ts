import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpuKdComponent } from './inpu-kd.component';

describe('InpuKdComponent', () => {
  let component: InpuKdComponent;
  let fixture: ComponentFixture<InpuKdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpuKdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpuKdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
