import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'card-mainsubcard',
  templateUrl: './card-mainsubcard.component.html',
  styleUrls: ['./card-mainsubcard.component.scss']
})
export class CardMainsubcardComponent implements OnInit {
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
  // listItemsDropDown: Array<string> = [
  //   '服务合同',
  //   '租赁合同',
  //   '销售合同',
  //   '加工承揽合同',
  //   '报销合同'
  // ];
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
      disabled: false
    },
    {
      id: 'toolbar-002',
      text: '编辑',
      class: 'btn-primary',
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

  toolbarA = {
    position: 'inHead',
    contents: [
      {
        id: 'a',
        disabled: false,
        title: '新增',
        click: 'addRecord',
        appearance: {
          class: 'k-button k-flat mr-2'
        },
        visible: true
      },
      {
        id: 'b',
        disabled: false,
        title: '删除',
        click: 'deleteRecord',
        appearance: {
          class: 'k-button k-flat mr-2'
        },
        visible: true
      },
      {
        id: 'c',
        disabled: false,
        title: '更新',
        click: 'updateRecord',
        appearance: {
          class: 'k-button k-flat mr-2'
        },
        visible: true
      },
      {
        id: 'd',
        disabled: true,
        title: '查询',
        click: 'selectRecord',
        appearance: {
          class: 'k-button k-flat mr-2'
        },
        visible: false
      }
    ]
  };
  toolbarB = {
    position: 'inHead',
    contents: [
      {
        id: 'a',
        disabled: false,
        title: '新增',
        click: 'addRecord',
        appearance: {
          class: 'k-button k-flat mr-2'
        },
        visible: true
      },
      {
        id: 'b',
        disabled: false,
        title: '删除',
        click: 'deleteRecord',
        appearance: {
          class: 'k-button k-flat mr-2'
        },
        visible: true
      }
    ]
  };
  orderListData = [];
  columns = [];
  total = 0;

  gridTab2GridData = [];
  gridTab2GridColumns = [];
  gridTab2GridTotal = 0;

  constructor(private orderService: PageService) {
    this.orderService.viewCard().subscribe(data => {
      if (!data) {
        return;
      }
      this.defaultData = data;
    });
    this.orderService.viewMaterial().subscribe((data: any) => {
      this.orderListData = data;
      this.total = this.orderListData.length;
    });
  }

  ngOnInit() {
    this.columns = [
      { field: 'WLBH', width: 180, title: '物料编号' },
      { field: 'WLMC', width: 180, title: '物料名称' },
      { field: 'WLMS', width: 180, title: '物料描述' },
      { field: 'WLTZ', width: 180, title: '物料特征' },
      { field: 'WLBM', width: 180, title: '物料别名' },
      { field: 'KHBH', width: 200, title: '客户物料编号' },
      { field: 'ZSL', width: 180, title: '主数量' },
      { field: 'ZDW', width: 180, title: '主单位' },
      { field: 'ZHZDJ', width: 200, title: '折前主单价' },
      { field: 'ZDJ', width: 200, title: '主单价' },
      { field: 'FSL', width: 200, title: '辅数量' },
      { field: 'FDW', width: 200, title: '辅单位' },
      { field: 'ZQFDJ', width: 200, title: '折前辅单价' },
      { field: 'FDJ', width: 180, title: '辅单价' }
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
}
