import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'grid-subgridcard',
  templateUrl: './grid-subgridcard.component.html',
  styleUrls: ['./grid-subgridcard.component.scss']
})
export class GridSubgridcardComponent implements OnInit {

  
  showFilter:boolean = false;

  @ViewChild('cell1') cell1: TemplateRef<any>;
  orderListData = [];
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
    { "id": '1', "text": "中国" },
    { "id": '2', "text": "俄罗斯"},
    { "id": '3', "text": "菲律宾"},
    { "id": '4', "text": "越南"},
    { "id": '5', "text": "老挝"},
    { "id": '6', "text": "中国1"},
    { "id": '7', "text": "中国2"},
    { "id": '8', "text": "中国3"},
    { "id": '9', "text": "中国4" }
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

  gridTab1GridData = [];
  gridTab1GridColumns = [];
  gridTab1GridTotal = 0;

  gridTab2GridData = [];
  gridTab2GridColumns = [];
  gridTab2GridTotal = 0;

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

    this.gridTab1GridColumns = [
      { field: '', width: 180, title: '物料编号' },
      { field: '', width: 180, title: '物料名称' },
      { field: '', width: 180, title: '物料描述' },
      { field: '', width: 180, title: '物料特征' },
      { field: '', width: 180, title: '物料别名' },
      { field: '', width: 200, title: '客户物料编号' },
      { field: '', width: 180, title: '主数量' },
      { field: '', width: 180, title: '主单位' },
      { field: '', width: 200, title: '折前主单价' },
      { field: '', width: 200, title: '主单价' },
      { field: '', width: 200, title: '辅数量' },
      { field: '', width: 200, title: '辅单位' },
      { field: '', width: 200, title: '折前辅单价' },
      { field: '', width: 180, title: '辅单价' }
    ];
    this.gridTab2GridColumns = [
      { field: '', width: 180, title: '送达方' },
      { field: '', width: 180, title: '送货地址' },
      { field: '', width: 180, title: '收货人' },
      { field: '', width: 180, title: '收货电话' },
      { field: '', width: 180, title: '收获地区' },
      { field: '', width: 200, title: '工厂' },
      { field: '', width: 180, title: '发货库存组织' },
      { field: '', width: 180, title: '发货仓库' },
      { field: '', width: 200, title: '发货条件' },
      { field: '', width: 200, title: '物流组织' },
      { field: '', width: 200, title: '计划交货日期' },
      { field: '', width: 200, title: '客户要求交货日期' },
      { field: '', width: 200, title: '货位' },
      { field: '', width: 180, title: '允许不足交货' },
      { field: '', width: 180, title: '不足交货容差(%)' },
      { field: '', width: 180, title: '允许超量交货' },
      { field: '', width: 180, title: '超量交货容差(%)' },
      { field: '', width: 180, title: '交货相关' },
      { field: '', width: 180, title: '补货相关' }
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
