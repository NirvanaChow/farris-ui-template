import {
  Component,
  OnInit,
  ViewChild,
  HostBinding,
  TemplateRef
} from '@angular/core';
import { OuterWizardService } from '../outer-wizard.service';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
@Component({
  selector: 'outer-wizard-page-first',
  templateUrl: './outer-wizard-page-first.component.html',
  styleUrls: ['./outer-wizard-page-first.component.scss']
})
export class OuterWizardPageFirstComponent implements OnInit {
  orderListData = [];
  @ViewChild('cell1') cell1: TemplateRef<any>;
  @ViewChild('cell2') cell2: TemplateRef<any>;
  @ViewChild('cell3') cell3: TemplateRef<any>;
  total = 0;
  columns = [];

  @HostBinding('class.f-template-wizard-page') cls = true;

  // --------------------------与向导相关
  private detailPage: FarrisPageDetailComponent = null;
  @ViewChild(FarrisPageDetailComponent) set cmpPageDetail(
    cmp: FarrisPageDetailComponent
  ) {
    this.detailPage = cmp;
  }

  enableBegin = false;
  enableDownload = false;
  showReminder = true;
  nevershowReminder = true;


  /**
   * --------------------------与向导相关
   * 设定需要传递给下一页的数据
   */
  pageData = {
    flag:'我是outer-wizard-page-first.component',
    showReminder: this.nevershowReminder,
    data: {}
  };

  constructor(
    private orderService: OuterWizardService,
    private wizardSer: WizardService
  ) {
    this.wizardSer.getWizardData().subscribe(data => {
      this.enableBegin = data.selectUnitValue !== '';
    });
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
  startCheck() {
    setTimeout(() => {
      //console.log('检查完毕');
      this.enableDownload = true;
    }, 1000);
  }

  noPrompt() {
    this.showReminder = false;
    this.nevershowReminder = false;
    this.pageData.showReminder = false;
  }

  closePrompt() {
    this.showReminder = false;
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
  /**
   * ------------------------------与向导相关
   * 下一步
   */
  nextStep() {
    // 设置当前页传递出去数据
    this.detailPage.setPageData(this.pageData);
    // 下一步
    this.detailPage.nextStep();
  }
  /**
   * ------------------------------与向导相关
   * 取消向导
   */
  cancelWizard() {
    this.detailPage.cancelWizard();
  }
  /**
   * ------------------------------与向导相关
   * 当前页被显示
   * event:{pageId: "deliverytime", state: true}
   */
  pagedetailSelected(event) {
    console.log(event.pageId + '被显示');
  }
}
