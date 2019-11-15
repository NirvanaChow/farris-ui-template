import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'manage-list-chart',
  templateUrl: './manage-list-chart.component.html',
  styleUrls: ['./manage-list-chart.component.scss']
})

export class ManageListChartComponent implements OnInit {

  @Output() formStateChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  toolbarData = [
    {
      id: 'toolbar-001',
      text: '新增',
      class: 'btn-primary',
      disabled: true
    },
    {
      id: 'toolbar-002',
      text: '编辑',
      disabled: false
    },
    {
      id: 'toolbar-003',
      text: '查看',
      disabled: false
    },
    {
      id: 'toolbar-004',
      text: '删除',
      disabled: true
    },
    {
      id: 'toolbar-005',
      text: '关闭',
      disabled: false
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  responseToolbarClick(ev) {
      let state = true;
      switch (ev.id) {
        case 'toolbar-002':
          state = false;
          break;
        default:
          state = true;
      }
      console.log('恭喜您选中了ID' + ev.id + '文字内容为' + ev.text);
  
      this.formStateChangeEvent.emit(state);
    }
    urlChange(item){
      if(item.hasOwnProperty('url')){
        this.router.navigate(['/new-page-structure/list-chart/'+ item.url]);
      }
    }
}