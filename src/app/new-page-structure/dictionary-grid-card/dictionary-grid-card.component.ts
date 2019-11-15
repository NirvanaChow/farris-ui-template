import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'dictionary-grid-card',
  templateUrl: './dictionary-grid-card.component.html',
  styleUrls: ['./dictionary-grid-card.component.scss']
})
export class DictionaryGridCardComponent implements OnInit {
  orderListData = [];

  @ViewChild('cell1') cell1: TemplateRef<any>;

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
  valObj = { id: '9', text: '中国4' };
  listItemsDropDown = [
    { id: '1', text: '中国' },
    { id: '2', text: '俄罗斯' },
    { id: '3', text: '菲律宾' },
    { id: '4', text: '越南' },
    { id: '5', text: '老挝' },
    { id: '6', text: '中国1' },
    { id: '7', text: '中国2' },
    { id: '8', text: '中国3' },
    { id: '9', text: '中国4' }
  ];
  lookupEmpee = '田玉';
  toolbarData = [
    {
      id: 'toolbar-001',
      text: '新增',
      class: 'btn-primary',
      disabled: true
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
      disabled: true
    },
    {
      id: 'toolbar-005',
      text: '关闭',
      disabled: false
    }
  ];
  total = 0;
  columns = [];

  constructor(private orderService: PageService) {
    this.orderService.viewList().subscribe((data: any) => {
      this.orderListData = data;
      this.total = data.length;
    });

    this.orderService.viewCard().subscribe(data => {
      if (!data) {
        return;
      }
      this.defaultData = data;
    });
  }

  ngOnInit() {
    this.columns = [
      {
        field: 'DDRQ',
        width: 200,
        title: '单据日期'
      },
      { field: 'DDBH', width: 200, title: '订单编号', template: this.cell1 },
      { field: 'KHMC', width: 200, title: '客户名称' },
      { field: 'ZJE', width: 100, title: '总金额' }
    ];
  }

  getBadgeCls(rowIndex) {
    const result = rowIndex % 6;
    let cls = '';
    switch (result) {
      case 0:
        cls = 'badge-info';
        break;
      case 1:
        cls = 'badge-success';
        break;
      case 2:
        cls = 'badge-warning';
        break;
      case 3:
        cls = 'badge-danger';
        break;
      case 4:
        cls = 'badge-continue';
        break;
      default:
        cls = 'badge-primary';
    }
    return 'badge ' + cls;
  }
}
