import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from '@farris/ui-dialog';

@Component({
  selector: 'app-sales-nav',
  templateUrl: './sales-nav.component.html',
  styleUrls: ['./sales-nav.component.css']
})
export class SalesNavComponent implements OnInit {
  @ViewChild('farrisDialog') farrisDialog: DialogComponent;
  @HostBinding('class')
  cls = 'd-flex flex-column g-main';

  pageTypeInfo = {
    list: [
      {
        name: '列表',
        value: 'list'
      },
      {
        name: '列表——滚动',
        value: 'list-scroll'
      }
    ],
    card: [
      {
        name: '卡片——主从',
        value: 'card'
      },
      {
        name: '卡片——带头部合计',
        value: 'card-des'
      },
      {
        name: '卡片——主从——折叠',
        value: 'card-accordion'
      },
      {
        name: '卡片——主从从',
        value: 'card-subsub'
      },
      {
        name: '卡片——单卡',
        value: 'card-single'
      },
      {
        name: '卡片——单卡——标签页',
        value: 'card-single-tab'
      }
    ],
    listCard: [
      {
        name: '列卡——单卡',
        value: 'listcard'
      },
      {
        name: '列卡——主从',
        value: 'listcard-subtable'
      },
      {
        name: '列卡——带过滤条',
        value: 'listcard-filter'
      },
      {
        name: '列卡——Layout',
        value: 'listcard-layout'
      },
      {
        name: '双列表',
        value: 'listlist'
      },
      {
        name: '双列表-Layout',
        value: 'listlist-layout'
      }
    ],
    treeCard: [
      {
        name: '树卡——单卡',
        value: 'tree'
      },
      {
        name: '树卡——主从',
        value: 'tree-subtable'
      },
      {
        name: '树卡——Layout',
        value: 'treecard-layout'
      },
      {
        name: '左树右列表',
        value: 'tree-list'
      }
    ]
  };

  selectedPage = '';

  constructor(private router: Router) {
    this.router.navigateByUrl('/page-template');
    this.selectedPage = 'list';
  }

  ngOnInit() {}

  gotoURL(url: string) {
    if (!url) {
      this.router.navigateByUrl('/page-template');
    } else {
      this.router.navigateByUrl('/page-template/' + url);
    }
    this.selectedPage = url;
  }
  changePageType() {
    this.gotoURL(this.selectedPage);
  }
  checkForPage(url) {
    this.farrisDialog.close();
    this.gotoURL(url);
  }
}
