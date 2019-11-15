import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PageService } from '../service/page.service';
@Component({
  selector: 'grid-grid-portrait',
  templateUrl: './grid-grid-portrait.component.html',
  styleUrls: ['./grid-grid-portrait.component.scss']
})
export class GridGridPortraitComponent implements OnInit {
  @ViewChild('cellLeft') cellLeft: TemplateRef<any>;
  @ViewChild('cell1') cell1: TemplateRef<any>;
  @ViewChild('cell2') cell2: TemplateRef<any>;
  @ViewChild('cell3') cell3: TemplateRef<any>;

  orderListData = [];
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
  total = 0;
  columns = [];

  grid2Data = [];
  grid2Columns = [];
  grid2Total = 0;

  constructor(private orderService: PageService) {
    this.orderService.viewList().subscribe((data: any) => {
      this.orderListData = data;
      this.total = data.length;
      this.grid2Data = data;
      this.grid2Total = data.length;
    });
  }

  ngOnInit() {
    this.columns = [
      {
        field: 'DDRQ',
        width: 200,
        title: '单据日期'
      },
      { field: 'DDBH', width: 200, title: '订单编号', template: this.cell3 },
      { field: 'KHMC', width: 200, title: '客户名称' },
      { field: 'ZJE', width: 100, title: '总金额' }
    ];
    this.grid2Columns = [
      { field: '', width: 100, title: '加急', template: this.cell2 },
      {
        field: 'DDRQ',
        width: 200,
        title: '单据日期'
      },
      { field: 'BM', width: 200, title: '部门' },
      { field: 'YWY', width: 200, title: '业务员' },
      { field: 'ZJE', width: 100, title: '总金额' },
      { field: 'BZ', width: 100, title: '币种' },
      { field: 'DDBH', width: 200, title: '订单编号', template: this.cell3 },
      { field: 'KHMC', width: 200, title: '客户名称' },
      { field: 'KHBM', width: 200, title: '客户别名' },
      {
        title: '管理',
        width: 200,
        template: this.cell1,
        align: 'center',
        hAlign: 'center'
      }
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
