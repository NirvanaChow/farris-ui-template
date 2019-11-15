import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostBinding
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs/observable/from';
// import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/scan';
import { concatMap, mergeAll } from 'rxjs/operators';
@Component({
  selector: 'app-nav-demos',
  templateUrl: './nav-demos.component.html',
  styleUrls: ['./nav-demos.component.scss']
})
export class NavDemosComponent implements OnInit {
  @HostBinding('class') cls = 'f-utils-absolute-all f-utils-flex-row';
  @ViewChild('changeElement')
  private changeEl: ElementRef;
  loading = false;
  activeIndex = -2;
  components_data = [
    {
      text: '字体',
      type: 'typography',
      progress: 2
    },
    { text: '图标', type: 'icon', progress: 2 },
    {
      text: '按钮组',
      type: 'buttongroup',
      progress: 0
    },
    {
      text: '按钮',
      type: 'buttons',
      progress: 2
    },
    {
      text: '多选单选',
      type: 'checkboxes',
      progress: 2
    },
    {
      text: '输入',
      type: 'inputs',
      progress: 2
    },
    {
      text: '多行文本',
      type: 'textarea',
      progress: 1
    },
    {
      text: '日期输入',
      type: 'dateinputs',
      progress: 0
    },
    {
      text: '卡片',
      type: 'card',
      progress: 0
    },
    {
      text: '日历',
      type: 'calendar',
      progress: 0
    },
    {
      text: '标签切换',
      type: 'tabstrip',
      progress: 0
    },
    {
      text: '下拉菜单',
      type: 'dropdowns',
      progress: 0
    },
    {
      text: '下拉树形',
      type: 'dropdowntree',
      progress: 0
    },
    {
      text: '切换',
      type: 'switch',
      progress: 2
    },
    {
      text: '菜单',
      type: 'menu',
      progress: 0
    },
    {
      text: '提醒',
      type: 'notification',
      progress: 0
    },
    {
      text: '提示条',
      type: 'tooltip',
      progress: 0
    },
    {
      text: '边线与徽章',
      type: 'border',
      progress: 2
    },
    {
      text: '工具栏',
      type: 'toolbar',
      progress: 0
    },
    {
      text: '収折面板',
      type: 'panelbar',
      progress: 2
    },
    {
      text: '弹出窗口',
      type: 'dialog',
      progress: 2
    },
    {
      text: '表格',
      type: 'grid',
      progress: 1
    },
    {
      text: '分页',
      type: 'pager',
      progress: 2
    },
    {
      text: '树',
      type: 'treeview',
      progress: 2
    },
    {
      text: '下拉树',
      type: 'dropdowntree',
      progress: 0
    },
    {
      text: '滑动块',
      type: 'slider',
      progress: 0
    },

    {
      text: '上传',
      type: 'upload',
      progress: 0
    },

    {
      text: '列表',
      type: 'list',
      progress: 0
    },
    {
      text: '区域分割',
      type: 'splitter',
      progress: 0
    },
    {
      text: 'Card自定义',
      type: 'card-custom',
      progress: 0
    },
    {
      text: '表格列菜单',
      type: 'grid-column-menu',
      progress: 0
    },
    {
      text: '表格编辑',
      type: 'grid-editing',
      progress: 1
    },
    {
      text: '表格分组',
      type: 'grid-grouping',
      progress: 0
    },
    {
      text: '多表头',
      type: 'grid-multicolumn-headers',
      progress: 0
    },
    {
      text: '列表框',
      type: 'listbox',
      progress: 0
    },
    {
      text: '树列表',
      type: 'treelist',
      progress: 0
    },
    {
      text: '日程表',
      type: 'scheduler',
      progress: 0
    }
  ];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    //  this.getAll();
  }

  /**
   * 不同进度增加不同Class标识
   * @param state
   */
  progressCls(state: number) {
    let clsName = '';
    switch (state) {
      case 0:
        clsName = 'text-light';
        break;
      case 1:
        clsName = 'text-info';
        break;
      case 2:
        clsName = 'text-success';
        break;
    }
    return clsName;
  }
  /**
   * 获取所有默认组件
   */
  getAll() {
    this.loading = true;
    this.activeIndex = -1;
    let len = this.components_data.length;
    from(this.components_data)
      .pipe(
        concatMap(data => {
          return this.http.get(`assets/elements/${data.type}.html`, {
            responseType: 'text'
          });
        })
      )
      .scan((acc, response) => {
        return acc + response['_body'];
      }, '')
      .subscribe(result => {
        len--;
        if (len <= 0) {
          this.changeEl.nativeElement.innerHTML = result;
          this.loading = false;
        }
      });
  }
  /**
   *
   * @param type 获取组件内容
   */
  getComponent(type: string, index: number) {
    this.loading = true;
    this.activeIndex = index;
    this.http
      .get(`assets/elements/${type}.html`, {
        responseType: 'text'
      })
      .subscribe(data => {
        this.changeEl.nativeElement.innerHTML = data;
        this.loading = false;
      });
  }
}
