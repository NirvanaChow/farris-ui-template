import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';

@Component({
  selector: 'single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
  defaultData = null;
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
    lookupEmpee = '田玉';
  constructor(private orderService: PageService) {
    this.orderService.viewCard().subscribe(data => {
      if (!data) {
        return;
      }
      this.defaultData = data;
    });
  }

  ngOnInit() {}
}
