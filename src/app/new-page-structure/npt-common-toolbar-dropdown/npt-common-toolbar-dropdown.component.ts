import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'npt-common-toolbar-dropdown',
  templateUrl: './npt-common-toolbar-dropdown.component.html',
  styleUrls: ['./npt-common-toolbar-dropdown.component.scss']
})
export class NptCommonToolbarDropdownComponent implements OnInit {

  toolbarIconData = [
    {
      type: 'type1',
      url:'list-grid',
      title:'卡片视图',
      iconName:'f-icon f-icon-group'
    },
    {
      type: 'type2',
      url:'list-echart',
      title:'图表视图',
      iconName:'f-icon f-icon-grid'
    },
    {
      type: 'type3',
      url:'list-view',
      title:'列表视图',
      iconName:'f-icon f-icon-grid-layout'
    },
    {
      type: 'type4',
      url:'list-card',
      title:'日历视图',
      iconName:'f-icon f-icon-ungroup'
    }
  ]

  @Output() urlChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toolTypeChange(event){
    //console.log(event);
    this.urlChange.emit(event);
  }
}
