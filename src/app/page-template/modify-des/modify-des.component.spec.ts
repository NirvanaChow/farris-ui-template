import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDesComponent } from './modify-des.component';

describe('ModifyDesComponent', () => {
  let component: ModifyDesComponent;
  let fixture: ComponentFixture<ModifyDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
