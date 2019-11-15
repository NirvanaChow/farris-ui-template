import { Component, OnInit, Output, EventEmitter, Input, ViewChild, TemplateRef } from '@angular/core';
import { PageService } from '../service/page.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'dictionary-sidebar',
  templateUrl: './dictionary-sidebar.component.html',
  styleUrls: ['./dictionary-sidebar.component.scss']
})
export class DictionarySidebarComponent implements OnInit {

  @ViewChild('cell1') cell1: TemplateRef<any>;
  @ViewChild('cell2') cell2: TemplateRef<any>;
  @ViewChild('cell3') cell3: TemplateRef<any>;

  // 管理列表绑定数据
  orderListData = [];
  // 响应式工具条事件
  @Output() formStateChangeEvent: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  // 响应式工具条数据
  toolbarData = [
    {
      id: 'toolbar-001',
      text: '新增',
      class: 'btn-primary',
      disabled: false
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
      disabled: false
    },
    {
      id: 'toolbar-005',
      text: '关闭',
      disabled: false
    }
  ];
  // 侧边栏状态
  sidebarStateEdit = false;
  // 侧边栏工具条
  sidebarToolbarData = [
    {
      id: 'sidebarbtn-001',
      text: '编辑',
      class: 'btn-primary',
      disabled: false
    },
    {
      id: 'sidebarbtn-002',
      text: '停用',
      disabled: false
    },
    {
      id: 'sidebarbtn-003',
      text: '关闭',
      disabled: false
    }
  ];

  // 侧边栏按钮可见状态
  sidebarBtnVisible = new BehaviorSubject({});
  // 侧边栏按钮禁用状态
  btnDisable = new BehaviorSubject({});

  // 侧边栏显示
  sidebarOpen = false;

  total = 0;
  columns = [];

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
  /**
   *   处理列表上的多彩徽标
   * @param rowIndex
   */
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
  /**
   * 处理工具条点击事件
   * @param ev
   */
  responseToolbarClick(ev) {
    switch (ev.id) {
      case 'toolbar-001':
        // 展开侧边栏
        this.sidebarOpen = true;
        // 新增按钮等禁用
        this.btnDisable.next({
          'toolbar-001': true,
          'toolbar-002': true,
          'toolbar-003': true
        });
        // 隐藏按钮
        this.sidebarBtnVisible.next({
          'sidebarbtn-001': false,
          'sidebarbtn-002': false
        });
        this.sidebarStateEdit = true;
        break;
    }
    console.log('恭喜您选中了ID' + ev.id + '文字内容为' + ev.text);
  }

  /**点击表格行内操作展开侧边栏 */
  showsidebar(){
    this.sidebarOpen = true;
  }
  /**
   * 侧边栏 响应式工具条点击
   * @param ev
   */
  sidebarToolbarClick(ev) {
    switch (ev.id) {
      case 'sidebarbtn-001':
        // 隐藏按钮
        this.sidebarBtnVisible.next({
          'sidebarbtn-001': false,
          'sidebarbtn-002': false
        });
        this.sidebarStateEdit = true;
        break;
      case 'sidebarbtn-003':
        // 新增按钮等启用
        this.btnDisable.next({
          'toolbar-001': false,
          'toolbar-002': false,
          'toolbar-003': false
        });
        // 展开侧边栏
        this.sidebarOpen = false;
        break;
    }
    console.log('恭喜您选中了ID' + ev.id + '文字内容为' + ev.text);
  }

  /**
   * 点击grid,显示侧边栏
   * @param ev
   */
  gridClick(ev) {
    this.sidebarOpen = true;
  }
  /**
   *
   */
  endSidebarEdit() {
    // 隐藏按钮
    this.sidebarBtnVisible.next({
      'sidebarbtn-001': true,
      'sidebarbtn-002': true
    });
    this.sidebarStateEdit = false;
  }
}
