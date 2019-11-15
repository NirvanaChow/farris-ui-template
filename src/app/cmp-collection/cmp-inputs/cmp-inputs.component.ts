import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerSideToken } from '@farris/ui-lookup';
import { LookupHttpService } from './lookupHttpService';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cmp-inputs',
  templateUrl: './cmp-inputs.component.html',
  styleUrls: ['./cmp-inputs.component.scss'],
  providers: [
    {
      provide: ServerSideToken,
      useClass: LookupHttpService,
      deps: [HttpClient]
    }
  ]
})
export class CmpInputsComponent implements OnInit {
  private path = 'assets/code/cmp-collection/';
  @Input() inputCls = '';
  @Input() horizontalCls = '';
  public maskedValue: string;
  public sliderValue = 5;
  public min = 0;
  public max = 10;
  public smallStep = 1;
  item232 = '张三';
  components_data = [
    { text: '下拉控件', url: 'dropdown', progress: 1 },
    { text: '输入控件', url: 'input', progress: 1 }
    // {
    //   text: '弹出窗口',
    //   url: 'dialog',
    //   progress: 2
    // }
  ];
  public listItems: Array<string> = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball'
  ];
  lookupvalue = '帮助测试文字';
  public switchValue = true;
  public switchValue2 = false;
  public value = ['Basketball', 'Cricket'];

  formGroup = new FormGroup({
    name: new FormControl(
      '阿德勒的理论强调人的积极品质和社会动机在个人行为中的重要作用'
    ),
    dates: new FormControl('2019-08-20T00:00:00'),
    description: new FormControl(
      '阿德勒的理论强调人的积极品质和社会动机在个人行为中的重要作用。他认为,人格是在战胜自卑和追求优越过程中形成发展的。'
    )
  });

  constructor() {}

  ngOnInit() {}

  getPath(pageName) {
    return this.path + pageName + '.html';
  }
}
