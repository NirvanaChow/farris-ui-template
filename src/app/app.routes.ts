import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './homepage/layout/layout.component';
const routes = [
  {
    path: 'theme-static',
    loadChildren:
      './theme-static-demo/theme-static-demo.module#ThemeStaticDemoModule'
  },
  {
    path: 'kendoui-component',
    loadChildren: './kendo-ui-demo/kendo-ui-demo.module#KendoUiDemoModule'
  },
  {
    path: 'page-template',
    loadChildren: './page-template/page-template.module#PageTemplateModule'
  },
  {
    path: 'cmp-collection',
    loadChildren: './cmp-collection/cmp-collection.module#CmpCollectionModule'
  },
  {
    path: 'introduce-css',
    loadChildren:
      './class-introduce/class-introduce.module#ClassIntroduceModule'
  },
  {
    path: 'new-page-structure',
    loadChildren:
      './new-page-structure/new-page-structure.module#NewPageStructureModule'
  },
  {
    path: 'wizard-page-second',
    loadChildren:
      './wizard-page-demo-second/wizard-page-demo-second.module#WizardPageDemoSecondModule'
  }
];

// export const AppRouter = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
