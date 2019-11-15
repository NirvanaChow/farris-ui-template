import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { OrderListService } from '../service/order-list.service';

@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.css']
})
export class SalesOrderListComponent implements OnInit {
  @HostBinding('class')
  cls = 'farris-main-area flex-column';

  orderListData = [];
  toolbarData = [
    {
      id: 'toolbar-001',
      text: '新增',
      class: 'btn-primary',
      disabled: false
    },
    {
      id: 'toolbar-002',
      text: '编辑',
      disabled: false
    },
    {
      id: 'toolbar-003',
      text: '查看',
      disabled: false
    },
    {
      id: 'toolbar-004',
      text: '删除',
      disabled: false
    },
    {
      id: 'toolbar-005',
      text: '关闭',
      disabled: false
    }
  ];
  constructor(private router: Router, private orderService: OrderListService) {}

  ngOnInit() {
    this.orderService.subscribe(data => {
      if (!data) {
        return;
      }
      this.orderListData = data;
    });
    this.orderService.read();
  }

  // 点击转跳
  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
  responseToolbarClick(ev) {
    console.log('恭喜您选中了ID' + ev['id'] + '文字内容为' + ev['text']);
  }
}
