import { Routes, RouterModule } from '@angular/router';

import { PageNavComponent } from './page-nav/page-nav.component';
import { ManageListComponent } from './manage-list/manage-list.component';
import { ManageListSchemeComponent } from './manage-list-scheme/manage-list-scheme.component';
import { PageStructureComponent } from './page-structure/page-structure.component';

import { NavigateStructureComponent } from './navigate-structure/navigate-structure.component';
import { NavigateListviewComponent } from './navigate-listview/navigate-listview.component';
import { DictionaryGridCardComponent } from './dictionary-grid-card/dictionary-grid-card.component';

import { CardStructureComponent } from './card-structure/card-structure.component';
import { CardMainsubcardComponent } from './card-mainsubcard/card-mainsubcard.component';
import { CardExtendComponent } from './card-extend/card-extend.component';
import { GridSubgridcardComponent } from './grid-subgridcard/grid-subgridcard.component';
import { DictionarySidebarComponent } from './dictionary-sidebar/dictionary-sidebar.component';
import { WizardPageEntranceComponent } from './wizard-page-entrance/wizard-page-entrance.component';
import { CardOnepageComponent } from './card-onepage/card-onepage.component';
import { TreeCardComponent } from './tree-card/tree-card.component';
import { TreeMainsubcardComponent } from './tree-mainsubcard/tree-mainsubcard.component';
import { GridGridComponent } from './grid-grid/grid-grid.component';
import { CardMainsubcardScrollspyComponent } from './card-mainsubcard-scrollspy/card-mainsubcard-scrollspy.component';
import { ManageListChartComponent } from './manage-list-chart/manage-list-chart.component';
import { ManageListChartListgridComponent } from './manage-list-chart/components/manage-list-chart-listgrid/manage-list-chart-listgrid.component';
import { ManageListChartListchartComponent } from './manage-list-chart/components/manage-list-chart-listchart/manage-list-chart-listchart.component';
import { ManageListChartListcardComponent } from './manage-list-chart/components/manage-list-chart-listcard/manage-list-chart-listcard.component';
import { ManageListChartListviewComponent } from './manage-list-chart/components/manage-list-chart-listview/manage-list-chart-listview.component';
import { WorkCenterComponent } from './work-center/work-center.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { GridGridPortraitComponent } from './grid-grid-portrait/grid-grid-portrait.component';
import { ManageListFilterComponent } from './manage-list-filter/manage-list-filter.component';
import { VerifyCardCollapseComponent } from './verify-card-collapse/verify-card-collapse.component';

const routes: Routes = [
  {
    path: '',
    component: PageNavComponent,
    children: [
      { path: '', redirectTo: 'list' },
      // 管理列表类模板结构
      { path: 'structure', component: PageStructureComponent },
      // 管理列表模板
      { path: 'list', component: ManageListComponent },
      // 管理列表启用方案
      { path: 'list-scheme', component: ManageListSchemeComponent },
      // 管理列表，点击调用侧边栏
      {
        path: 'dictionary-sidebar',
        component: DictionarySidebarComponent
      },
      // 管理列表-图表切换
      {
        path: 'list-chart',
        component: ManageListChartComponent,
        children: [
          {
            path: '',
            redirectTo: 'list-grid'
          },
          {
            path: 'list-grid',
            component: ManageListChartListgridComponent
          },
          {
            path: 'list-echart',
            component: ManageListChartListchartComponent
          },
          {
            path: 'list-view',
            component: ManageListChartListviewComponent
          },
          {
            path: 'list-card',
            component: ManageListChartListcardComponent
          }
        ]
      },
      { path: 'list-filter', component: ManageListFilterComponent },
      // 向导模板
      { path: 'wizard', component: WizardPageEntranceComponent },
      // 任务中心
      { path: 'work-center', component: WorkCenterComponent },
      // 卡片类模板结构
      { path: 'card-structure', component: CardStructureComponent },
      // 主从卡片
      { path: 'mainsubcard', component: CardMainsubcardComponent },
      // 主从卡片带滚动监听
      {
        path: 'mainsubcard-scroll',
        component: CardMainsubcardScrollspyComponent
      },
      // 主从卡片-单从表—带扩展
      { path: 'card-extend', component: CardExtendComponent },
      { path: 'verify-card', component: VerifyCardCollapseComponent },
      // 左右导航类模板结构
      { path: 'navigate', component: NavigateStructureComponent },
      // Listview导航
      { path: 'listview', component: NavigateListviewComponent },
      // 列卡(单卡)
      { path: 'grid-card', component: DictionaryGridCardComponent },
      // 列卡(主从卡-过滤扩展)
      {
        path: 'grid-mainsubcard',
        component: GridSubgridcardComponent
      },
      {
        path: 'onepage',
        component: CardOnepageComponent
      },
      // 树卡(单卡)
      {
        path: 'tree-card',
        component: TreeCardComponent
      },
      // 树卡(主从卡)
      {
        path: 'tree-mainsubcard',
        component: TreeMainsubcardComponent
      },
      // 双列表
      {
        path: 'grid-grid',
        component: GridGridComponent
      },
      // 左树右列表
      {
        path: 'tree-grid',
        component: TreeGridComponent
      },
      {
        path: 'grid-grid-portrait',
        component: GridGridPortraitComponent
      }
      //   {
      //     path: 'listcard-layout', // 左列表右卡——Layout
      //     component: ListCardLayoutComponent
      //   },
      //   {
      //     path: 'treecard-layout', // 左树右卡——Layout
      //     component: TreeCardLayoutComponent
      //   },
      //   {
      //     path: 'listlist-layout', // 左列表右列表——Layout
      //     component: ListListLayoutComponent
      //   },
      //   {
      //     path: 'modify-des',
      //     component: ModifyDesComponent
      //   },
      //   {
      //     path: 'leftnavrightgrid', // 左导航右列表
      //     component: LeftNavRightGridComponent
      //   },
      //   {
      //     path: 'programe-ywzfsq',
      //     component: ProgrameYwzfsqComponent
      //   }
    ]
  }
];

export const NewPageStructureRoutes = RouterModule.forChild(routes);
