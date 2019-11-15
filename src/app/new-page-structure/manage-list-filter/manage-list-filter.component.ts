import {
  Component,
  OnInit,
  HostBinding,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'manage-list-filter',
  templateUrl: './manage-list-filter.component.html',
  styleUrls: ['./manage-list-filter.component.scss']
})
export class ManageListFilterComponent implements OnInit {

  @ViewChild('cell1') cell1: TemplateRef<any>;
  @ViewChild('cell2') cell2: TemplateRef<any>;
  @ViewChild('cell3') cell3: TemplateRef<any>;


  lookupEmpee = '田玉';
  public date: Date = new Date(2019, 5, 20);
  orderListData = [];

  @Output() formStateChangeEvent: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Input() showExtend = false;

  filterleftlist = [
    {
        "id": "6a967bdb-2a8e-41f9-afe6-1c918b3d755",
        "labelCode": "6a967bdb-2a8e-41f9-afe6-1c918b3d755",
        "code": "text",
        "name": "text",
        "control": {
            "controltype": "text",
            "placeholder": "请输入",
            "required":true
        }
    },
    {
        "id": "6a967bdb-2a8e-41f9-afe6-1c918b3d75af",
        "labelCode": "6a967bdb-2a8e-41f9-afe6-1c918b3d75af",
        "code": "dropdown",
        "name": "下拉选择",
        "control": {
            "controltype": "dropdown",
            "valueType": "1",
            "enumValues": [
                {"value": "Billing", "name": "制单"},
                {"value": "SubmitApproval", "name": "提交审批"},
                {"value": "Approved", "name": "审批通过"},
                {"value": "ApprovalNotPassed", "name": "审批不通过"}
            ],
            "required":true
        }
    },
    {
        "id": "6a967bdb-2a8e-41f9-afe6-1c918b3d75ae",
        "labelCode": "6a967bdb-2a8e-41f9-afe6-1c918b3d75ae",
        "code": "singledate",
        "name": "日期",
        "control": {
            "controltype": "singleDate",
            "placeholder": "请选择日期",
            "required":true
        }
        
    },
    {
        "id": "6a967bdb-2a8e-41f9-afe6-1c918b3d799",
        "labelCode": "6a967bdb-2a8e-41f9-afe6-1c918b3d799",
        "code": "number2",
        "name": "数字2",
        "control": {
            "controltype": "number",
            "placeholder": "请输入金额"
        }
    }
]

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

  responseToolbarClick(ev) {
    let state = true;
    switch (ev.id) {
      case 'toolbar-002':
        state = false;
        break;
      default:
        state = true;
    }
    console.log('恭喜您选中了ID' + ev.id + '文字内容为' + ev.text);

    this.formStateChangeEvent.emit(state);
  }

  onSearch(event){
    console.log(event);
  }

}
