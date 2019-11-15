import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'navigate-listview',
  templateUrl: './navigate-listview.component.html',
  styleUrls: ['./navigate-listview.component.scss']
})
export class NavigateListviewComponent implements OnInit {
  @ViewChild('cell1') cell1: TemplateRef<any>;
  @ViewChild('cell2') cell2: TemplateRef<any>;
  @ViewChild('cell3') cell3: TemplateRef<any>;
  
  listnavData = [
    {
      id: '11',
      name: '全部',
      type: 'link',
      url: 'all',
      unreadnumber: 3
    },
    {
      id: '22',
      name: '采购管理',
      type: 'link',
      unreadnumber: 4,
      url: 'manage',
      active: 'true'
    },
    {
      id: '33',
      name: '应付',
      type: 'link',
      url: 'copy-with'
      // 'disable':true
    },
    {
      id: '44',
      name: '合同管理',
      type: 'link',
      url: 'contract-manage',
      unreadnumber: 0
    },
    {
      id: '55',
      name: '网上报销',
      type: 'link',
      url: 'online-reimbursement',
      unreadnumber: 0
    },
    {
      id: '66',
      name: '手工填报',
      type: 'link',
      url: 'manual-reporting',
      unreadnumber: 0
    }
  ];
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
  total = 0;
  columns = [];

  constructor(private orderService: PageService) {
    this.orderService.viewList().subscribe((data: any) => {
      this.orderListData = data;
      this.total = data.length;
    });
  }

  ngOnInit() {
    this.columns = [
      { field: '', width: 100, title: '加急', template: this.cell2 },
      {
        field: 'DDRQ',
        width: 200,
        title: '单据日期'
      },
      { field: 'DDBH', width: 200, title: '订单编号', template: this.cell3 },
      { field: 'KHMC', width: 200, title: '客户名称' },
      { field: 'KHBM', width: 200, title: '客户别名' },
      { field: 'BM', width: 200, title: '部门' },
      { field: 'YWY', width: 200, title: '业务员' },
      { field: 'ZJE', width: 100, title: '总金额' },
      { field: 'BZ', width: 100, title: '币种' },
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

  listClick(item){
    //console.log(item);
  }
}
