import { Component, OnInit, HostBinding } from '@angular/core';
import { OrderListService } from '../service/order-list.service';

@Component({
  selector: 'app-sales-order-tree-subtable',
  templateUrl: './sales-order-tree-subtable.component.html',
  styleUrls: ['./sales-order-tree-subtable.component.css']
})
export class SalesOrderTreeSubtableComponent implements OnInit {
  @HostBinding('class')
  cls = 'farris-main-area flex-column';
  // 列信息
  cols = [
    { field: 'name', title: 'Name', width: 100 },
    { field: 'size', title: 'Size', width: 100 },
    { field: 'type', title: 'Type', width: 100 }
  ];
  state = 'view'; // edit, save, view
  treedata;
  // 下拉
  listItemsDropDown: Array<string> = [
    '服务合同',
    '租赁合同',
    '销售合同',
    '加工承揽合同',
    '报销合同'
  ];
  constructor(private orderService: OrderListService) {}

  ngOnInit() {
    this.orderService.viewTreeGrid().subscribe(data => {
      this.treedata = data;
    });
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
