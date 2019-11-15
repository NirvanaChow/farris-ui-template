import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-kendo',
  templateUrl: './nav-kendo.component.html',
  styleUrls: ['./nav-kendo.component.scss']
})
export class NavKendoComponent implements OnInit {
  @HostBinding('class') cls = 'f-utils-absolute-all f-utils-flex-row';
  activeIndex = -1;
  components_data = [
    { text: '下拉控件', url: 'dropdown', progress: 1 },
    { text: '输入控件', url: 'input', progress: 1 }
    // {
    //   text: '弹出窗口',
    //   url: 'dialog',
    //   progress: 2
    // }
  ];
  constructor(private router: Router) {}
  ngOnInit() {}
  /**
   * 转跳
   * @param url
   */
  navTo(url: string, index: number) {
    this.router.navigateByUrl('kendoui-component/' + url);
    this.activeIndex = index;
  }
  /**
   * 不同进度增加不同Class标识
   * @param state
   */
  progressCls(state: number) {
    let clsName = '';
    switch (state) {
      case 0:
        clsName = 'text-light';
        break;
      case 1:
        clsName = 'text-info';
        break;
      case 2:
        clsName = 'text-success';
        break;
    }
    return clsName;
  }
}
