import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';

@Component({
  selector: 'wizard-page-third',
  templateUrl: './wizard-page-third.component.html',
  styleUrls: ['./wizard-page-third.component.scss']
})
export class WizardPageThirdComponent implements OnInit {
  orderListData = [];
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

  constructor(private wizardSer: WizardService) {
    // --------------------------与向导相关
    this.wizardSer.getWizardData().subscribe(data => {
      this.enableBegin = data.selectUnitValue !== '';
    });
  }

  ngOnInit() {}

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
   * 结束向导
   */
  finishWizard() {
    this.detailPage.finishWizard();
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
      let prevPageData = this.detailPage.getPageData(prevPageId);
      // 更新当前页
      this.pageData.showReminder = prevPageData.showReminder;
    }
  }
}
