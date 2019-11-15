import { Component, OnInit, HostBinding} from '@angular/core';
import { OrderListService } from '../service/order-list.service';

@Component({
  selector: 'app-card-accordion',
  templateUrl: './card-accordion.component.html',
  styleUrls: ['./card-accordion.component.css']
})
export class CardAccordionComponent implements OnInit {
  @HostBinding('class')
  cls = 'farris-main-area flex-column';
  // 卡片默认数据
  defaultData = null;
  // 帮助的数据
  gridOpts = {
    url: 'assets/data/empoyee.json',
    pageSize: 20,
    pageIndex: 1,
    idField: 'Name'
  };
  // 帮助
  item = '';
  // 下拉
  listItemsDropDown: Array<string> = [
    '服务合同',
    '租赁合同',
    '销售合同',
    '加工承揽合同',
    '报销合同'
  ];
  state = 'view'; // edit, save, view
  constructor(private orderService: OrderListService) {
    this.orderService.viewCard().subscribe(data => {
      if (!data) {
        return;
      }
      this.defaultData = data;
    });
  }

  ngOnInit() {}
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
