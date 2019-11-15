import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work-center',
  templateUrl: './work-center.component.html',
  styleUrls: ['./work-center.component.scss']
})
export class WorkCenterComponent implements OnInit {
  listViewData = [
    {
      id: '1111', //id作为唯一标识
      title: '中国电影集团（北京怀柔）影视基地华龙动画制作公司',
      code: '2039358025',
      productName: '自然鲜压榨酱香酱油（酿造酱油）',
      productNumber: '23箱',
      productTotalAmount: '5,900.00',
      productPackage: '箱装',
      productFormat: '1L*24桶',
      state: 'maturity'
    },
    {
      id: '2222',
      title: '浪潮国际',
      code: '2039358025',
      productName: '鲁花 食用油 5S 物理压榨 压榨一级 花生油',
      productNumber: '2000箱',
      productTotalAmount: '215,999.00 ',
      productPackage: '箱装',
      productFormat: '1L*24桶',
      state: 'maturity'
    }
  ];
  constructor() {}

  ngOnInit() {}

  // 下拉按钮被点击
  dpSectionState(ev) {}
  // 下拉按钮被点击
  dpSectionStateInView(ev) {
  }
}
