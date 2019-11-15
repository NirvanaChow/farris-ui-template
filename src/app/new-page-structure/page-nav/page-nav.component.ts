import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent implements OnInit {
  @HostBinding('class')
  cls = 'd-flex flex-column g-main';

  pageTypeInfos = [
    {
      type: 'list',
      text: '选择列表类型',
      infos: [
        {
          name: '管理列表',
          value: 'list'
        },
        {
          name: '管理列表(启用方案)',
          value: 'list-scheme'
        },
        {
          name: '管理列表(呼出侧边栏)',
          value: 'dictionary-sidebar'
        },
        {
          name: '管理列表(图表切换)',
          value: 'list-chart'
        },
        {
          name: '管理列表(筛选组件)',
          value: 'list-filter'
        }
      ]
    },
    {
      type: 'card',
      text: '选择卡片类型',
      infos: [
        {
          name: '卡片(主从表)',
          value: 'mainsubcard'
        },
        {
          name: '卡片(主从表-带滚动监听)',
          value: 'mainsubcard-scroll'
        },
        {
          name: '卡片(主从表-带扩展)',
          value: 'card-extend'
        },
        {
          name: 'Onepage',
          value: 'onepage'
        }
      ]
    },
    {
      type: 'listCard',
      text: '选择列卡类型',
      infos: [
        {
          name: 'ListView导航',
          value: 'listview'
        },
        {
          name: '列卡(单卡-过滤扩展)',
          value: 'grid-card'
        },
        {
          name: '列卡(主从卡)',
          value: 'grid-mainsubcard'
        },
        {
          name: '树卡(单卡)',
          value: 'tree-card'
        },
        {
          name: ' 树卡(主从卡)',
          value: 'tree-mainsubcard'
        },
        {
          name: '双列表',
          value: 'grid-grid'
        },
        {
          name: '双列表(上下)',
          value: 'grid-grid-portrait'
        },
        {
          name: '左树右列表',
          value: 'tree-grid'
        }
      ]
    },
    {
      type: 'special',
      text: '特殊类型',
      infos: [
        {
          name: '向导页面',
          value: 'wizard'
        },
        {
          name: '任务中心',
          value: 'work-center'
        },
        {
          name: '验证卡片',
          value: 'verify-card'
        }
      ]
    },
    {
      type: 'structure',
      text: '模板结构',
      infos: [
        {
          name: '列表类模板结构',
          value: 'structure'
        },
        {
          name: '卡片模板类结构',
          value: 'card-structure'
        },
        {
          name: '左右导航类模板结构',
          value: 'navigate'
        }
      ]
    }
  ];

  selectedPage = '';

  constructor(private router: Router) {
    // this.router.navigateByUrl('/new-page-structure');
    this.selectedPage = 'list';
  }

  ngOnInit() {}

  gotoURL(url: string) {
    if (!url) {
      this.router.navigateByUrl('/new-page-structure');
    } else {
      this.router.navigateByUrl('/new-page-structure/' + url);
    }
    this.selectedPage = url;
  }
  changePageType() {
    this.gotoURL(this.selectedPage);
  }
}
