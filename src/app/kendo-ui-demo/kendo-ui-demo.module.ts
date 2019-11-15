import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KendoUiDemoRouter } from './kendo-ui-demo.routes';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { InpuKdComponent } from './inpu-kd/inpu-kd.component';
import { NavKendoComponent } from './nav-kendo/nav-kendo.component';
import { DropdownKdComponent } from './dropdown-kd/dropdown-kd.component';

/***
 * Kendo UI 组件Demo
 */


@NgModule({
  imports: [
    CommonModule,
    KendoUiDemoRouter,
    FormsModule,
    DropDownsModule,
    InputsModule
  ],
  declarations: [NavKendoComponent, DropdownKdComponent, InpuKdComponent]
})
export class KendoUiDemoModule {}
