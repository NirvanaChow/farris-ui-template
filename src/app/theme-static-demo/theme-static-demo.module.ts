import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeStaticDemoRoutes } from './theme-static-demo.routes';
import { NavDemosComponent } from './nav-demos/nav-demos.component';

/***
 * 样式文件导航
 * 通过导航，加载对应路径页面内容进来
 */


@NgModule({
  imports: [CommonModule, ThemeStaticDemoRoutes],
  declarations: [NavDemosComponent]
})
export class ThemeStaticDemoModule {}
