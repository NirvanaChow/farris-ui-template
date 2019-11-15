import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cmp-dates',
  templateUrl: './cmp-dates.component.html',
  styleUrls: ['./cmp-dates.component.scss']
})
export class CmpDatesComponent implements OnInit {
  @Input() inputCls = '';
  @Input() horizontalCls='';
  public value: Date = new Date();
  public switchValue = true;
  public switchValue2 = false;
  public numericValue = 5;
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
    '足球',
    '篮球',
    '网球',
    '羽毛球',
    '乒乓球',
    '排球',
    '台球'
  ];
  public multSelect = ['足球', '篮球'];

  valObj = { id: '9', text: '中国4' };
  listItemsDropDown = [
    { "id": '1', "text": "中国" },
    { "id": '2', "text": "俄罗斯"},
    { "id": '3', "text": "菲律宾"},
    { "id": '4', "text": "越南"},
    { "id": '5', "text": "老挝"},
    { "id": '6', "text": "中国1"},
    { "id": '7', "text": "中国2"},
    { "id": '8', "text": "中国3"},
    { "id": '9', "text": "中国4" }
  ];
  multilistItemsDropDown = [
    { "id": '11', "text": "中国" },
    { "id": '22', "text": "俄罗斯"},
    { "id": '33', "text": "菲律宾"},
    { "id": '44', "text": "越南"},
    { "id": '55', "text": "老挝"},
    { "id": '66', "text": "中国1"},
    { "id": '77', "text": "中国2"},
    { "id": '88', "text": "中国3"},
    { "id": '99', "text": "中国4" }
  ];
  multiCombolist = {
    id : '22', text: '俄罗斯'
  }

  constructor() {}

  ngOnInit() {}
}
