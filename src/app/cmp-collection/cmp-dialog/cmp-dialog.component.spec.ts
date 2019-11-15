import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDialogComponent } from './cmp-dialog.component';

describe('CmpDialogComponent', () => {
  let component: CmpDialogComponent;
  let fixture: ComponentFixture<CmpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
