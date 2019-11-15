import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-icons',
  templateUrl: './cmp-icons.component.html',
  styleUrls: ['./cmp-icons.component.scss']
})
export class CmpIconsComponent implements OnInit {
  iconDatas = [
    {
      code: 'header-icon-code',
      name: '编号类'
    },
    {
      code: 'header-icon-query',
      name: '查询类'
    },
    {
      code: 'header-icon-dealwith',
      name: '处理类'
    },
    {
      code: 'header-icon-form',
      name: '单据类'
    },
    {
      code: 'header-icon-define',
      name: '定义类'
    },
    {
      code: 'header-icon-review',
      name: '复核类'
    },
    {
      code: 'header-icon-manage',
      name: '管理类'
    },
    {
      code: 'header-icon-record',
      name: '记录类'
    },
    {
      code: 'header-icon-category',
      name: '类别类'
    },
    {
      code: 'header-icon-start',
      name: '启动类'
    },
    {
      code: 'header-icon-task',
      name: '任务类'
    },
    {
      code: 'header-icon-config',
      name: '配置类'
    },
    {
      code: 'header-icon-maintain',
      name: '维护类'
    },
    {
      code: 'header-icon-dict',
      name: '字典类'
    }
  ];

  headerIcons = [
    {
      icon: 'f-icon-page-title-administer',
      type: '管理列表类',
      color: 'f-text-orna-manage'
    },
    {
      icon: 'f-icon-page-title-record',
      type: '主从卡片类',
      color: 'f-text-orna-bill'
    },
    {
      icon: 'f-icon-page-title-maintenance',
      type: '双列表',
      color: 'f-text-orna-param'
    },
    {
      icon: 'f-icon-page-title-type',
      type: '左树右主从',
      color: 'f-text-orna-dict'
    },
    {
      icon: 'f-icon-page-title-define',
      type: '左树右单卡',
      color: 'f-text-orna-dict'
    },
    {
      icon: 'f-icon-page-title-start',
      type: '左列右主从',
      color: 'f-text-orna-dict'
    },
    {
      icon: 'f-icon-page-title-dictionary',
      type: '左列右单卡',
      color: 'f-text-orna-dict'
    }
  ];

  constructor() {}

  ngOnInit() {}

}
