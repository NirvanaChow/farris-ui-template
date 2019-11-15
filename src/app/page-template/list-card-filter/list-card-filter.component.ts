import { Component, OnInit, HostBinding } from '@angular/core';
import { OrderListService } from '../service/order-list.service';
@Component({
  selector: 'app-list-card-filter',
  templateUrl: './list-card-filter.component.html',
  styleUrls: ['./list-card-filter.component.css']
})
export class ListCardFilterComponent implements OnInit {

  @HostBinding('class')
  cls = 'farris-main-area flex-column';
  // 下拉
  listItemsDropDown: Array<string> = [
    '服务合同',
    '租赁合同',
    '销售合同',
    '加工承揽合同',
    '报销合同'
  ];
  data = [];

  state = 'view'; // edit, save, view

  constructor(private orderService: OrderListService) {}

  ngOnInit() {
    this.orderService.subscribe(data => {
      this.data = data;
    });
    this.orderService.read();
  }
  // 修改状态
  changeState(cState) {
    this.state = cState;
  }
  // readonly状态
  readonlyState() {
    if (this.state !== 'add' && this.state !== 'edit') {
      return true;
    }
    return false;
  }

}
