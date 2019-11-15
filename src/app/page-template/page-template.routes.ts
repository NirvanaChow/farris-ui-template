import { Routes, RouterModule } from '@angular/router';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { SalesOrderListcardComponent } from './sales-order-listcard/sales-order-listcard.component';
import { SalesOrderTreeComponent } from './sales-order-tree/sales-order-tree.component';
import { SalesNavComponent } from './sales-nav/sales-nav.component';
// import { GridModeCalendarComponent } from './grid-mode-calendar/grid-mode-calendar.component';
import { SalesOrderTreeSubtableComponent } from './sales-order-tree-subtable/sales-order-tree-subtable.component';
import { SalesOrderListcardSubtableComponent } from './sales-order-listcard-subtable/sales-order-listcard-subtable.component';
import { SalesOrderTreeListComponent } from './sales-order-tree-list/sales-order-tree-list.component';
import { SalesOrderListListComponent } from './sales-order-list-list/sales-order-list-list.component';
import { CardAccordionComponent } from './card-accordion/card-accordion.component';
import { CardDesComponent } from './card-des/card-des.component';
import { CardSingleComponent } from './card-single/card-single.component';
import { CardSingleTabComponent } from './card-single-tab/card-single-tab.component';
import { CardSubsubComponent } from './card-subsub/card-subsub.component';
import { ListCardLayoutComponent } from './list-card-layout/list-card-layout.component';
import { TreeCardLayoutComponent } from './tree-card-layout/tree-card-layout.component';
import { ListListLayoutComponent } from './list-list-layout/list-list-layout.component';
import { ListScrollComponent } from './list-scroll/list-scroll.component';
import { ListCardFilterComponent } from './list-card-filter/list-card-filter.component';
import { ModifyDesComponent } from './modify-des/modify-des.component';
const routes: Routes = [
  {
    path: '',
    component: SalesNavComponent,
    children: [
      { path: '', redirectTo: 'list' },
      { path: 'list', component: SalesOrderListComponent },
      { path: 'list-scroll', component: ListScrollComponent },
      { path: 'card', component: SalesOrderDetailComponent }, // 卡片
      { path: 'card-accordion', component: CardAccordionComponent }, // 卡片——主从——手风琴
      { path: 'card-des', component: CardDesComponent }, // 卡片——带头部合计
      { path: 'card-single-tab', component: CardSingleTabComponent }, // 卡片——单卡片
      { path: 'card-single', component: CardSingleComponent }, // 卡片——单卡片——标签页
      { path: 'card-subsub', component: CardSubsubComponent }, // 卡片——主从从
      { path: 'listcard', component: SalesOrderListcardComponent }, // 左列右卡
      { path: 'listlist', component: SalesOrderListListComponent }, // 列表导航
      { path: 'tree', component: SalesOrderTreeComponent }, // 树-单卡
      { path: 'tree-subtable', component: SalesOrderTreeSubtableComponent }, // 树——主从表
      { path: 'tree-list', component: SalesOrderTreeListComponent }, // 树——树导航
      { path: 'listcard-filter', component: ListCardFilterComponent }, // 列表-卡片-过滤条
      {
        path: 'listcard-subtable',
        component: SalesOrderListcardSubtableComponent
      },
      {
        path: 'listcard-layout', // 左列表右卡——Layout
        component: ListCardLayoutComponent
      },
      {
        path: 'treecard-layout', // 左树右卡——Layout
        component: TreeCardLayoutComponent
      },
      {
        path: 'listlist-layout', // 左列表右列表——Layout
        component: ListListLayoutComponent
      },
      {
        path: 'modify-des',
        component: ModifyDesComponent
      }
    ]
  }
];

export const PageTemplateRoutes = RouterModule.forChild(routes);
