import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
// import { GridModule } from '@progress/kendo-angular-grid';
// import { InputsModule } from '@progress/kendo-angular-inputs';
// import { LayoutModule as KendoLayoutMoule } from '@progress/kendo-angular-layout';
import { NgxEchartsModule } from 'ngx-echarts';

import { FarrisSidebarModule } from '@farris/ui-sidebar';
import { FarrisSectionModule } from '@farris/ui-section';
import { FResponseToolbarModule } from '@farris/ui-response-toolbar';
import { LookupModule } from '@farris/ui-lookup';
import { FDropdownDirectiveTypeModule } from '@farris/ui-dropdown';
import { FarrisDialogModule } from '@farris/ui-dialog';
import { FarrisTabsModule } from '@farris/ui-tabs';
import { WizardModule } from '@farris/ui-wizard';
import { FieldGroupModule } from '@farris/ui-field-group';
import { ProgressStepModule } from '@farris/ui-progress-step';
import { ListNavModule } from '@farris/ui-list-nav';
import { ListViewModule } from '@farris/ui-list-view';
import { AngularDraggableModule } from '@farris/ui-draggable';
import { ScrollspyModule } from '@farris/ui-scrollspy';
import { TreeTableModule } from '@farris/ui-treetable';
import { DatagridModule } from '@farris/ui-datagrid';
import { SplitterModule } from '@farris/ui-splitter';
import { FarrisDatePickerModule } from '@farris/ui-datepicker';
import { ViewChangeModule } from '@farris/ui-view-change';
import { InputGroupModule } from '@farris/ui-input-group';
import { DatalistModule } from '@farris/ui-datalist';
import { ComboListModule } from '@farris/ui-combo-list';
import { ListFilterModule } from '@farris/ui-list-filter';
import { NumberSpinnerModule } from '@farris/ui-number-spinner';

import { WizardPageDemoFirstModule } from '../wizard-page-demo-first/wizard-page-demo-first.module';
import { WizardPageDemoSecondModule } from '../wizard-page-demo-second/wizard-page-demo-second.module';

import { NewPageStructureRoutes } from './new-page-structure.route';
import { PageNavComponent } from './page-nav/page-nav.component';
import { ManageListComponent } from './manage-list/manage-list.component';
import { ManageListSchemeComponent } from './manage-list-scheme/manage-list-scheme.component';
import { PageService } from './service/page.service';
import { SingleCardComponent } from './single-card/single-card.component';
import { PageStructureComponent } from './page-structure/page-structure.component';
import { CardStructureComponent } from './card-structure/card-structure.component';
import { NavigateStructureComponent } from './navigate-structure/navigate-structure.component';
import { NavigateListviewComponent } from './navigate-listview/navigate-listview.component';
import { DictionaryGridCardComponent } from './dictionary-grid-card/dictionary-grid-card.component';
import { CardMainsubcardComponent } from './card-mainsubcard/card-mainsubcard.component';
import { CardExtendComponent } from './card-extend/card-extend.component';
import { GridSubgridcardComponent } from './grid-subgridcard/grid-subgridcard.component';
import { DictionarySidebarComponent } from './dictionary-sidebar/dictionary-sidebar.component';
import { WizardPageEntranceComponent } from './wizard-page-entrance/wizard-page-entrance.component';

import { WizardPageSecondComponent } from './wizard-page-second/wizard-page-second.component';
import { WizardPageThirdComponent } from './wizard-page-third/wizard-page-third.component';
import { CardOnepageComponent } from './card-onepage/card-onepage.component';
import { NptCommonSchemeComponent } from './npt-common-scheme/npt-common-scheme.component';
import { TreeCardComponent } from './tree-card/tree-card.component';
import { TreeMainsubcardComponent } from './tree-mainsubcard/tree-mainsubcard.component';
import { GridGridComponent } from './grid-grid/grid-grid.component';
import { CardMainsubcardScrollspyComponent } from './card-mainsubcard-scrollspy/card-mainsubcard-scrollspy.component';
import { ManageListChartComponent } from './manage-list-chart/manage-list-chart.component';
import { ManageListChartListgridComponent } from './manage-list-chart/components/manage-list-chart-listgrid/manage-list-chart-listgrid.component';
import { ManageListChartListchartComponent } from './manage-list-chart/components/manage-list-chart-listchart/manage-list-chart-listchart.component';
import { ManageListChartListcardComponent } from './manage-list-chart/components/manage-list-chart-listcard/manage-list-chart-listcard.component';
import { ManageListChartListviewComponent } from './manage-list-chart/components/manage-list-chart-listview/manage-list-chart-listview.component';
import { NptCommonToolbarDropdownComponent } from './npt-common-toolbar-dropdown/npt-common-toolbar-dropdown.component';
import { WorkCenterComponent } from './work-center/work-center.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { NptCommonFilterComponent } from './npt-common-filter/npt-common-filter.component';
import { GridGridPortraitComponent } from './grid-grid-portrait/grid-grid-portrait.component';
import { VerifyCardCollapseComponent } from './verify-card-collapse/verify-card-collapse.component';
import { LocaleModule } from '@farris/ui-locale';
import { ManageListFilterComponent } from './manage-list-filter/manage-list-filter.component';

@NgModule({
  declarations: [
    PageNavComponent,
    ManageListComponent,
    ManageListSchemeComponent,
    SingleCardComponent,
    PageStructureComponent,
    CardStructureComponent,
    NavigateStructureComponent,
    NavigateListviewComponent,
    DictionaryGridCardComponent,
    CardMainsubcardComponent,
    CardExtendComponent,
    GridSubgridcardComponent,
    DictionarySidebarComponent,
    WizardPageEntranceComponent,
    WizardPageSecondComponent,
    WizardPageThirdComponent,
    CardOnepageComponent,
    NptCommonSchemeComponent,
    TreeCardComponent,
    TreeMainsubcardComponent,
    GridGridComponent,
    CardMainsubcardScrollspyComponent,
    ManageListChartComponent,
    ManageListChartListgridComponent,
    ManageListChartListchartComponent,
    ManageListChartListcardComponent,
    ManageListChartListviewComponent,
    NptCommonToolbarDropdownComponent,
    WorkCenterComponent,
    TreeGridComponent,
    NptCommonFilterComponent,
    GridGridPortraitComponent,
    ManageListFilterComponent,
    VerifyCardCollapseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxEchartsModule,
    // ButtonsModule,
    // DateInputsModule,
    // DropDownsModule,
    // GridModule,
    // InputsModule,
    // KendoLayoutMoule,
    // ChartModule,
    NewPageStructureRoutes,
    // TreeTableModule,
    // CommonSharedModule,
    LookupModule,
    FieldGroupModule,
    // FarrisPanelModule,
    // LayoutModule,
    FarrisDialogModule,
    FResponseToolbarModule,
    FDropdownDirectiveTypeModule,
    FarrisSidebarModule,
    FarrisSectionModule,
    FarrisTabsModule,
    WizardModule,
    ProgressStepModule,
    ListNavModule,
    ListViewModule,
    WizardPageDemoFirstModule,
    WizardPageDemoSecondModule,
    AngularDraggableModule,
    ScrollspyModule,
    TreeTableModule,
    DatagridModule,
    SplitterModule,
    FarrisDatePickerModule,
    ViewChangeModule,
    InputGroupModule,
    DatalistModule,
    ComboListModule,
    ListFilterModule,
    NumberSpinnerModule,
    LocaleModule
  ],
  providers: [PageService]
})
export class NewPageStructureModule {}
