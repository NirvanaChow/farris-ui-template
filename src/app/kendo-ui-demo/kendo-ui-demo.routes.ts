import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavKendoComponent } from './nav-kendo/nav-kendo.component';
import { DropdownKdComponent } from './dropdown-kd/dropdown-kd.component';
import { InpuKdComponent } from './inpu-kd/inpu-kd.component';

const routes: Routes = [
  {
    path: '',
    component: NavKendoComponent,
    children: [
      {
        path: 'dropdown',
        component: DropdownKdComponent
      },
      {
        path: 'input',
        component: InpuKdComponent
      }
    ]
  }
  /**/
];

export const KendoUiDemoRouter = RouterModule.forChild(routes);
