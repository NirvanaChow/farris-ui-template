import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent implements OnInit {
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
  // 列信息
  cols = [
    { field: 'name', title: 'Name', width: 100 },
    { field: 'size', title: 'Size', width: 100 },
    { field: 'type', title: 'Type', width: 100 }
  ];
  total = 0;
  columns = [];
  treedata;
  grid2Data = [];
  grid2Columns = [];
  grid2Total = 0;

  constructor(private orderService: PageService) {
    this.orderService.viewTreeGrid().subscribe(data => {
      this.treedata = data;
    });
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
