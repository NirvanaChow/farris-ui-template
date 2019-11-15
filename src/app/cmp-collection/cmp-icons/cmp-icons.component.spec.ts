import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpIconsComponent } from './cmp-icons.component';

describe('CmpIconsComponent', () => {
  let component: CmpIconsComponent;
  let fixture: ComponentFixture<CmpIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
