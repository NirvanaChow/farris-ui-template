import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardFilterComponent } from './list-card-filter.component';

describe('ListCardFilterComponent', () => {
  let component: ListCardFilterComponent;
  let fixture: ComponentFixture<ListCardFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCardFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
