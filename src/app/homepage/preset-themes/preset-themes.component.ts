import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preset-themes',
  templateUrl: './preset-themes.component.html',
  styleUrls: ['./preset-themes.component.scss']
})
export class PresetThemesComponent implements OnInit {
  // 预置主题
  selectedTheme = '';
  selectedType = '';
  // 标记主题是否展开
  expanded = false;
  // 所有预置主题
  selfPresetThemes = [];
  // 选中主题后，抛出事件
  @Output() selectThemeEvent = new EventEmitter();
  @Input()
  set presetThemes(value) {
    this.selfPresetThemes = [].concat(value);
    if (value.length > 1) {
      this.selectedTheme = value[0].code;
      this.selectedType = value[0].types[0].type;
    }
  }
  constructor() {}

  ngOnInit() {}

  selectTheme(code: string, type: string) {
    if (this.selectedTheme !== code || this.selectedType !== type) {
      this.selectedTheme = code;
      this.selectedType = type;
      this.selectThemeEvent.emit({ code, type });
    }
  }
}
