import { Component, OnInit } from '@angular/core';
import {
  WizardService,
  WizardEvent,
  WizardEventType,
  FarrisPageDetailComponent
} from '@farris/ui-wizard';
@Component({
  selector: 'wizard-page-entrance',
  templateUrl: './wizard-page-entrance.component.html',
  styleUrls: ['./wizard-page-entrance.component.scss']
})
export class WizardPageEntranceComponent implements OnInit {
  selectUnitValue = '';
  progressData = {
    activeIndex: -1,
    stepMessages: [
      {
        id: 'deliverytime',
        title: '设置发货时间',
        icon: ''
      },
      {
        id: 'outerpagesecond',
        title: '外部引入',
        icon: ''
      },
      {
        id: 'selectgood',
        title: '选择商品',
        icon: ''
      },
      {
        id: 'shipmentamount',
        title: '选择库存组织设置发货量',
        icon: ''
      }
    ]
  };

  stepValue = 'deliverytime';
  constructor(private wizardSer: WizardService) {}

  ngOnInit() {
    if (this.progressData.activeIndex >= 0) {
      this.stepValue = this.progressData.stepMessages[
        this.progressData.activeIndex
      ]['id'];
    }
    // 设置向导数据，供子取数
    this.wizardSer.setWizardData({ selectUnitValue: this.selectUnitValue });
  }

  onSelect(event) {
    console.log('PageSelected事件');
    console.log(event);
  }
  change() {
    // ------------------------------------向导相关，处理向导数据
    this.progressData = Object.assign({}, this.progressData, {
      activeIndex: this.selectUnitValue ? 0 : -1
    });
    this.wizardSer.setWizardData({ selectUnitValue: this.selectUnitValue });
  }
  wizardStateChange(event: WizardEvent) {
    if (event.state === WizardEventType.Finish) {
      alert('您完成所有步骤，结束向导');
    }
    if (event.state === WizardEventType.Cancel) {
      alert('您取消了当前向导');
    }
  }
}
