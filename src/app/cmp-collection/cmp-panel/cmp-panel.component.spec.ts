import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPanelComponent } from './cmp-panel.component';

describe('CmpPanelComponent', () => {
  let component: CmpPanelComponent;
  let fixture: ComponentFixture<CmpPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
