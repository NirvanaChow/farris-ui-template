import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-variable-panel',
  templateUrl: './variable-panel.component.html',
  styleUrls: ['./variable-panel.component.scss']
})
export class VariablePanelComponent implements OnInit {
  theme_variables_panel = [];
  theme_variables = [];
  @Output() selfVarriableAreaEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() formatCodeEvent: EventEmitter<any> = new EventEmitter();
  @Input()
  set themeVariables(value) {
    this.theme_variables = [].concat(value);
    setTimeout(() => {
      value.forEach(item => {
        this.theme_variables_panel.push(item['type']);
      });
    }, 200);
  }
  get themeVariables() {
    return this.theme_variables;
  }
  show_selfvariable = false;
  constructor() {}

  ngOnInit() {}
  changeDialg(ev: Event) {
    ev.stopImmediatePropagation();
    this.show_selfvariable = !this.show_selfvariable;
    this.selfVarriableAreaEvent.emit(this.show_selfvariable);
  }
  formatCodeHandler(ev: Event) {
    ev.stopImmediatePropagation();
    this.formatCodeEvent.emit();
  }
}
