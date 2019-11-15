import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { OuterWizardService } from '../outer-wizard.service';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';

@Component({
  selector: 'outer-wizard-page-second',
  templateUrl: './outer-wizard-page-second.component.html',
  styleUrls: ['./outer-wizard-page-second.component.scss']
})
export class OuterWizardPageSecondComponent implements OnInit {
  @HostBinding('class.f-template-wizard-page') cls = true;
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
  listItemsDropDown: Array<string> = [
    '服务合同',
    '租赁合同',
    '销售合同',
    '加工承揽合同',
    '报销合同'
  ];
  defaultData = null;

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
    flag: '我是outer-wizard-page-second.component',
    showReminder: this.nevershowReminder,
    data: {}
  };

  constructor(
    private wizardSer: WizardService,
    private orderService: OuterWizardService
  ) {
    // 初始化时的数据
    this.orderService.viewCard().subscribe(data => {
      if (!data) {
        return;
      }
      this.defaultData = data;
    });

    // --------------------------与向导相关
    this.wizardSer.getWizardData().subscribe(data => {
      this.enableBegin = data.selectUnitValue !== '';
    });
  }

  ngOnInit() {}

  startCheck() {
    setTimeout(() => {
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
    if (event.state) {
      // --------------------------与向导相关
      const prevPageId = this.wizardSer.getPrePageId(
        this.detailPage.getPageId()
      );
      // 获取上一页的数据
      const prevPageData = this.detailPage.getPageData(prevPageId);
      // 更新当前页
      this.pageData.showReminder = prevPageData.showReminder;
    }
  }
}
