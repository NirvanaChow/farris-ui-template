import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'verify-card-collapse',
  templateUrl: './verify-card-collapse.component.html',
  styleUrls: ['./verify-card-collapse.component.scss']
})
export class VerifyCardCollapseComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
