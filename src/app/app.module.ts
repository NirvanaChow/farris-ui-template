import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '@farris/ui-loading';
import { FarrisPanelModule } from '@farris/ui-panel';


import { ColorPickerModule } from 'ngx-color-picker';
import { AppRoutes } from './app.routes';
import { LayoutComponent } from './homepage/layout/layout.component';

import { VariablePanelComponent } from './homepage/variable-panel/variable-panel.component';
import { ChangeThemeService } from './service/change-theme.service';
import { PresetThemesComponent } from './homepage/preset-themes/preset-themes.component';

import {
  AngularMonacoEditorConfig,
  AngularMonacoEditorModule
} from 'angular-monaco-editor';
import { CmpListComponent } from './homepage/cmp-list/cmp-list.component';

// 高亮代码语法
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

// const monacoConfig: AngularMonacoEditorConfig = {
//   baseUrl: 'assets', // configure base path for monaco editor
//   defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
//   onMonacoLoad: () => {
//     console.log((<any>window).monaco);
//   }
// };
export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml }
  ];
}

@NgModule({
  declarations: [
    LayoutComponent,
    VariablePanelComponent,
    PresetThemesComponent,
    CmpListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutes,
    FormsModule,
    FarrisPanelModule,
    ColorPickerModule,
    LoadingModule.forRoot(),
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    AngularMonacoEditorModule.forRoot({
      baseUrl: 'assets', // configure base path for monaco editor
      defaultOptions: { scrollBeyondLastLine: false } // 在线代码编辑器
    })
  ],
  providers: [ChangeThemeService],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
