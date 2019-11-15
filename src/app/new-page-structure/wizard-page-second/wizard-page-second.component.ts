import {
  Component,
  OnInit,
  Input,
  ViewChild,
  HostBinding,
  TemplateRef
} from '@angular/core';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { PageService } from '../service/page.service';

@Component({
  selector: 'wizard-page-second',
  templateUrl: './wizard-page-second.component.html',
  styleUrls: ['./wizard-page-second.component.scss']
})
export class WizardPageSecondComponent implements OnInit {
  @ViewChild('cell1') cell1: TemplateRef<any>;
  orderListData = [];
  defaultData = null;
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
    showReminder: this.nevershowReminder,
    data: {}
  };

  constructor(
    private wizardSer: WizardService,
    private orderService: PageService
  ) {
    // --------------------------与向导相关
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
      {
        field: 'DDRQ',
        width: 200,
        title: '单据日期'
      },
      { field: 'DDBH', width: 200, title: '订单编号', template: this.cell1 },
      { field: 'KHMC', width: 200, title: '客户名称' },
      { field: 'ZJE', width: 100, title: '总金额' }
    ];
    // this.orderService.viewCard().subscribe(data => {
    //   if (!data) {
    //     return;
    //   }
    //   this.defaultData = data;
    // });
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
   * 上一步
   */
  prevStep() {
    // 上一步
    this.detailPage.prevStep();
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
    //debugger
    if (event.state) {
      // --------------------------与向导相关
      const prevPageId = this.wizardSer.getPrePageId(
        this.detailPage.getPageId()
      );
      // 获取上一页的数据
      let prevPageData = this.detailPage.getPageData(prevPageId);
      // 更新当前页
      this.pageData.showReminder = prevPageData.showReminder;
    }
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
