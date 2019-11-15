import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule as KendoLayoutMoule } from '@progress/kendo-angular-layout';
// import { ChartModule } from '@progress/kendo-angular-charts';
import { OrderListService } from './service/order-list.service';
import { SalesOrderListcardComponent } from './sales-order-listcard/sales-order-listcard.component';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { SalesOrderTreeComponent } from './sales-order-tree/sales-order-tree.component';
import { PageTemplateRoutes } from './page-template.routes';
import { SalesNavComponent } from './sales-nav/sales-nav.component';
// import { GridModeCalendarComponent } from './grid-mode-calendar/grid-mode-calendar.component';
// import { Form } from '@farris/devkit';
import { SalesOrderTreeSubtableComponent } from './sales-order-tree-subtable/sales-order-tree-subtable.component';
import { Observable } from 'rxjs/observable';
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
// import {
//   CommonSharedModule
//   // CacheService,
//   // DrawerService
// } from '@gsp-sys/rtf-common';

// farris/ui
import { FarrisPanelModule } from '@farris/ui-panel';
import { FieldGroupModule } from '@farris/ui-field-group';
import { LookupModule } from '@farris/ui-lookup';
import { TreeTableModule } from '@farris/ui-treetable';
import { FarrisDialogModule } from '@farris/ui-dialog';
import { FResponseToolbarModule } from '@farris/ui-response-toolbar';
import { LayoutModule } from '@farris/ui-layout';

// 帮助的服务
// import { LookupHttpService } from './service/lookupHttpService';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    DateInputsModule,
    DropDownsModule,
    GridModule,
    InputsModule,
    KendoLayoutMoule,
    // ChartModule,
    PageTemplateRoutes,
    TreeTableModule,
    // CommonSharedModule,
    LookupModule,
    FieldGroupModule,
    FarrisPanelModule,
    LayoutModule,
    FarrisDialogModule,
    FResponseToolbarModule
  ],
  declarations: [
    SalesOrderListcardComponent,
    SalesOrderDetailComponent,
    SalesOrderListComponent,
    SalesOrderTreeComponent,
    SalesNavComponent,
    SalesOrderTreeSubtableComponent,
    SalesOrderListcardSubtableComponent,
    SalesOrderTreeListComponent,
    SalesOrderListListComponent,
    CardAccordionComponent,
    CardDesComponent,
    CardSingleComponent,
    CardSingleTabComponent,
    CardSubsubComponent,
    ListCardLayoutComponent,
    TreeCardLayoutComponent,
    ListListLayoutComponent,
    ListScrollComponent,
    ListCardFilterComponent,
    ModifyDesComponent
    // GridModeCalendarComponent
  ],
  // exports: [ GridModeChangeComponent],
  bootstrap: [SalesOrderListComponent],
  providers: [
    OrderListService
  ]
})
export class PageTemplateModule {
}
