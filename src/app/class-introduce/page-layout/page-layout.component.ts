import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  someCode = '<p>XXX</p>';
  @HostBinding('class') cls = 'f-utils-absolute-all f-utils-flex-row';
  activeIndex = -1;
  componentsData = [
    {
      text: '输入',
      url: 'css-input',
      progress: 2
    },
    {
      text: '表单',
      url: 'css-form',
      progress: 2
    },
    { text: '弹性布局', url: 'css-flex', progress: 2 },
    {
      text: '滚动条',
      url: 'css-overflow',
      progress: 2
    },
    {
      text: '图片布局',
      url: 'image',
      progress: 2
    },
    {
      text: '测试Flex',
      url: 'verify-flex',
      progress: 1
    },
    {
      text: '测试Grid',
      url: 'verify-grid',
      progress: 1
    }
  ];

  constructor(private router: Router) {}
  ngOnInit() {}
  /**
   * 转跳
   * @param url
   */
  navTo(url: string, index: number) {
    this.router.navigateByUrl('/introduce-css/' + url);
    this.activeIndex = index;
  }
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
