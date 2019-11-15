import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PageService } from '../service/page.service';

@Component({
  selector: 'card-onepage',
  templateUrl: './card-onepage.component.html',
  styleUrls: ['./card-onepage.component.scss']
})
export class CardOnepageComponent implements OnInit {
  defaultData = null;
  tabs = [
    {
      'id':'basic',
      'title':'基本信息'
    },
    {
      'id':'bills',
      'title':'单据信息'
    },
    {
      'id':'accessory',
      'title':'附件信息'
    }
  ]
  // 响应式工具条数据
  toolbarData = [
    {
      id: 'toolbar-001',
      text: '新增',
      class: 'btn-primary',
      disabled: false
    },
    {
      id: 'toolbar-002',
      text: '复制',
      disabled: false
    },
    {
      id: 'toolbar-003',
      text: '保存',
      disabled: true
    },
    {
      id: 'toolbar-004',
      text: '保存多份',
      disabled: true
    },
    {
      id: 'toolbar-005',
      text: '取消',
      disabled: true
    },
    {
      id: 'toolbar-006',
      text: '删除',
      disabled: false
    },
    {
      id: 'toolbar-007',
      text: '打印',
      disabled: false
    },
    {
      id: 'toolbar-008',
      text: '附件',
      disabled: false
    },
    {
      id: 'toolbar-009',
      text: '附属设备',
      disabled: false
    },
    {
      id: 'toolbar-010',
      text: '部分分摊初始',
      disabled: false
    }
  ];

  // 侧边栏按钮禁用状态
  btnDisable = new BehaviorSubject({});

  valObj = { id: '9', text: '中国4' };
  listItemsDropDown = [
    { "id": '1', "text": "中国" },
    { "id": '2', "text": "俄罗斯"},
    { "id": '3', "text": "菲律宾"},
    { "id": '4', "text": "越南"},
    { "id": '5', "text": "老挝"},
    { "id": '6', "text": "中国1"},
    { "id": '7', "text": "中国2"},
    { "id": '8', "text": "中国3"},
    { "id": '9', "text": "中国4" }
  ];

  constructor(private orderService: PageService) { 
    this.orderService.viewCard().subscribe(data => {
      if (!data) {
        return;
      }
      this.defaultData = data;
    });
  }

  ngOnInit() {
  }


  /**
   * 处理工具条点击事件
   * @param ev
   */
  responseToolbarClick(ev) {
    console.log('恭喜您选中了ID' + ev.id + '文字内容为' + ev.text);
  }

  private currentSection: string = 'basic';
  scrollSectionChange(sectionId:string){
    this.currentSection = sectionId;
    //console.log(sectionId);
  }
}
