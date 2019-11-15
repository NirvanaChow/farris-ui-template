import { Component, OnInit, HostBinding } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RoutesRecognized
} from '@angular/router';
import { ChangeThemeService } from '../../service/change-theme.service';
//import { environment } from '../../../environments/environment';
import { LoadingService } from '@farris/ui-loading';
import { forkJoin } from 'rxjs/observable/forkJoin';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'homepage-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @HostBinding('class') cls = 'gw-page-wrapper d-flex flex-column';
  activeUrl = '';
  loading = null;
  themeVariables = [];
  presetThemes = [];
  showVariableArea = false;
  options = {
    theme: 'vs-dark',
    language: 'css',
    automaticLayout: true
  };
  themeExtend = '';
  // 显示模板List
  cmpListPanelShow = false;
  private _editor: any; // 编辑器指针

  // 导航上信息
  navInfos = [
    {
      url: 'theme-static',
      title: '静态样式集'
    },
    {
      url: 'kendoui-component',
      title: 'KendoUI组件集'
    },
    {
      url: 'page-template',
      title: '旧页面结构'
    },
    {
      url: 'new-page-structure',
      title: '新页面结构'
    },
    {
      url: 'cmp-collection',
      title: '组件样式'
    },
    {
      url: 'introduce-css',
      title: '常用样式说明'
    }
  ];

  constructor(
    private changeThemeSer: ChangeThemeService,
    private router: Router,
    private loadService: LoadingService
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loadingShow('淡定，淡定！奋力加载中....');
      } else if (event instanceof NavigationEnd) {
        this.loadingHide();
      }
      // } else if (event instanceof NavigationCancel) {
      //   //
      // } else if (event instanceof NavigationError) {
      //   //
      // } else if (event instanceof RoutesRecognized) {
      //   //
      // }
    });
  }
  ngOnInit() {
    // this.loadingShow('正在加载变量');

    // forkJoin(
    //   this.changeThemeSer.getPresetThemes(),
    //   this.changeThemeSer.getVariables(),
    //   this.changeThemeSer.getThemeExtend()
    // ).subscribe(result => {
    //   if (result[0].status === 'success') {
    //     this.presetThemes = result[0].text;
    //   }
    //   if (result[1].status === 'success') {
    //     this.themeVariables = result[1].text;
    //   }
    //   if (result[2].status === 'success') {
    //     this.themeExtend = this._cssFormat(result[2].text);
    //   }
    //   this.navTo('new-page-structure/listview');
    //   this.loadingHide();
    // });
   this.navTo('theme-static');
  }
  /**
   * 生成主题
   */
  changeTheme() {
    this.loadingShow('马不停蹄的生成主题中....');
    this.changeThemeSer
      .changeTheme(this.themeVariables, this.themeExtend)
      .subscribe(result => {
        if (result.status === 'success') {
          const themeStyleEl = document.getElementById('themestyle');
          themeStyleEl.innerHTML = result.text;
          const themeDefaultEl = document.getElementById('themeDefault');
          if (themeDefaultEl) {
            themeDefaultEl.attributes['src'] = '';
          }
          this.loadingHide();
        }
      });
  }
  /**
   * 如果查找时候，没有修改变量生成样式文件，需要生成后再下载
   */
  downloadTheme() {
    return (
      'http://localhost:9090/api/downloadtheme/' +
      this.changeThemeSer.getFileDir()
    );
    // return 'http://localhost:9090/api/downloadtheme/2019-03-02-13-45-24';
  }
  /**
   * 转跳
   * @param url
   */
  navTo(url: string) {
    this.router.navigateByUrl(url);
    this.activeUrl = url;
  }
  loadingShow(message) {
    this.loadService.show({
      message
    });
  }
  loadingHide() {
    this.loadService.clearAll();
  }
  selfVarriable(state: boolean) {
    this.showVariableArea = state;
  }
  // 选中主题之后
  selectThemeHandler(event) {
    this.loadingShow('正在切换主题....');
    this.changeThemeSer.selectTheme(event.code, event.type).subscribe(data => {
      if (data.status === 'success') {
        const themeStyleEl = document.getElementById('themestyle');
        themeStyleEl.innerHTML = '';
        const themeDefaultEl = document.getElementById('themeDefault');
        if (themeDefaultEl) {
          themeDefaultEl.setAttribute(
            'href',
            'assets/themes/' + event.code + '/' + event.type + '/farris-all.css'
          );
        }

        forkJoin(
          this.changeThemeSer.getVariables(),
          this.changeThemeSer.getThemeExtend()
        ).subscribe(result => {
          if (result[0].status === 'success') {
            this.themeVariables = result[0].text;
          }
          if (result[1].status === 'success') {
            this.themeExtend = this._cssFormat(result[1].text);
          }
          this.loadingHide();
        });
      } else {
        // 存在异常
      }
    });
  }
  onMonacoInit(event) {
    this._editor = event.editor;
    // setTimeout(() => {
    //   this._editor
    //     .getAction('editor.action.formatDocument')
    //     .run()
    //     .then(() => {
    //       console.log('格式化成功');
    //     });
    // }, 300);
  }
  formatCodeHandler() {
    this.themeExtend = this._cssFormat(this.themeExtend);
  }
  private _cssFormat(code) {
    code = code.replace(/(\s){2,}/gi, '$1');
    code = code.replace(/(\S)\s*\{/gi, '$1 {');
    code = code.replace(/\*\/(.[^\}\{]*)}/gi, '*/\n$1}');
    code = code.replace(/\/\*/gi, '\n/*');
    code = code.replace(/;\s*(\S)/gi, ';\n\t$1');
    code = code.replace(/\}\s*(\S)/gi, '}\n$1');
    code = code.replace(/\n\s*\}/gi, '\n}');
    code = code.replace(/\{\s*(\S)/gi, '{\n\t$1');
    code = code.replace(/(\S)\s*\*\//gi, '$1*/');
    code = code.replace(/\*\/\s*([^\}\{]\S)/gi, '*/\n\t$1');
    code = code.replace(/(\S)\}/gi, '$1\n}');
    code = code.replace(/(\n){2,}/gi, '\n');
    code = code.replace(/:/gi, ': ');
    code = code.replace(/  /gi, ' ');
    return code;
  }
  // 点击按钮时，是否显示面板
  showOrHideCmpListPanel() {
    this.cmpListPanelShow = !this.cmpListPanelShow;
  }
}
