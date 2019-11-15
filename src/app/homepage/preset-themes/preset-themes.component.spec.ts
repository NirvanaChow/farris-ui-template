import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetThemesComponent } from './preset-themes.component';

describe('PresetThemesComponent', () => {
  let component: PresetThemesComponent;
  let fixture: ComponentFixture<PresetThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
