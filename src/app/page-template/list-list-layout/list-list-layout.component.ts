import { Component, OnInit, HostBinding } from '@angular/core';
import { OrderListService } from '../service/order-list.service';
@Component({
  selector: 'app-list-list-layout',
  templateUrl: './list-list-layout.component.html',
  styleUrls: ['./list-list-layout.component.css']
})
export class ListListLayoutComponent implements OnInit {
  @HostBinding('class')
  cls = 'farris-main-area flex-column';
  orderListData;
  state = 'view'; // edit, save, view
  listItemsDropDown: Array<string> = [
    '服务合同',
    '租赁合同',
    '销售合同',
    '加工承揽合同',
    '报销合同'
  ];
  constructor(private orderService: OrderListService) {}

  ngOnInit() {
    this.orderService.getList().subscribe(data => {
      this.orderListData = data;
    });
  }
    // 修改状态
    changeState(cState) {
      this.state = cState;
    }
}
