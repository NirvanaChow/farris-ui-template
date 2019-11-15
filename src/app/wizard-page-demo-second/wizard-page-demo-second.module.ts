import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { WizardModule } from '@farris/ui-wizard';
import { LookupModule } from '@farris/ui-lookup';

import { OuterWizardPageSecondComponent } from './outer-wizard-page-second/outer-wizard-page-second.component';
// import { WizardPageDemoSecondRoutes } from './wizard-page-demo-second.route';
import { OuterWizardService } from './outer-wizard.service';

@NgModule({
  declarations: [OuterWizardPageSecondComponent],
  imports: [
    CommonModule,
    FormsModule,
 //   WizardPageDemoSecondRoutes,
    DateInputsModule,
    DropDownsModule,
    InputsModule,
    LookupModule,
    WizardModule
  ],
  providers: [OuterWizardService],
  exports: [OuterWizardPageSecondComponent]
})
export class WizardPageDemoSecondModule {}
