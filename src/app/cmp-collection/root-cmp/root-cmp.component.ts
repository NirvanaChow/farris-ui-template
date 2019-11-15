import {
  Component,
  OnInit,
  HostBinding,
  Renderer2,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-root-cmp',
  templateUrl: './root-cmp.component.html',
  styleUrls: ['./root-cmp.component.scss']
})
export class RootCmpComponent implements OnInit {
  inputCls = '';
  // f-input-underline
  stateUnderline = false;
  // f-form-viewstate
  stateView = false;
  isHorizontal = true;
  horizontalCls = 'farris-form-controls-inline ';
  @HostBinding('class') cls = 'g-main farris-overflow-y-auto';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {}

  inputToUnderline(isUnderline: boolean) {
    this.stateUnderline = isUnderline;
    if (isUnderline) {
      this.stateView = false;
    }
    this._inputCls();
  }
  formToView(isStateView: boolean) {
    this.stateView = isStateView;
    this._inputCls();
  }
  _inputCls() {
    this.inputCls = '';
    if (this.stateView) {
      this.inputCls += 'f-form-viewstate';
    }
    if (this.stateUnderline) {
      this.inputCls += 'f-input-underline';
    }
  }

  chageDirection(isHoz: boolean) {
    this.isHorizontal = isHoz;
    this.horizontalCls = isHoz ? 'farris-form-controls-inline' : '';
  }
}
