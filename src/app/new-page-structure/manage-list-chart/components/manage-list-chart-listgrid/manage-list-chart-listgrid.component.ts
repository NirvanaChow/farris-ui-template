import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { PageService } from '../../../service/page.service';

@Component({
  selector: 'manage-list-chart-listgrid',
  templateUrl: './manage-list-chart-listgrid.component.html',
  styleUrls: ['./manage-list-chart-listgrid.component.scss']
})
export class ManageListChartListgridComponent implements OnInit {
  orderListData = [];
  total = 0;
  columns = [];
  @ViewChild('cell1') cell1: TemplateRef<any>;
  @ViewChild('cell2') cell2: TemplateRef<any>;
  @ViewChild('cell3') cell3: TemplateRef<any>;
  constructor(private orderService: PageService) {
    this.orderService.viewList().subscribe((data: any) => {
      this.orderListData = data;
      this.total = data.length;
    });
  }

  ngOnInit() {
    this.columns = [
      {
        field: 'DDRQ',
        width: 200,
        title: '订单日期'
      },
      { field: 'DDBH', width: 200, title: '订单编号', template: this.cell3 },
      { field: 'KHMC', width: 200, title: '单位名称' },
      { field: 'KHBM', width: 200, title: '售达方' },
      { field: 'BM', width: 200, title: '计算状态' },
      { field: 'ZJE', width: 100, title: '总金额' },
      { field: 'BZ', width: 200, title: '备注' }
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
