import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuterWizardPageFirstComponent } from './outer-wizard-page-first/outer-wizard-page-first.component';
import { OuterWizardService } from './outer-wizard.service';
import { WizardModule } from '@farris/ui-wizard';
import { GridModule } from '@progress/kendo-angular-grid';
@NgModule({
  declarations: [OuterWizardPageFirstComponent],
  imports: [CommonModule, WizardModule, GridModule],
  providers: [OuterWizardService],
  exports: [OuterWizardPageFirstComponent]
})
export class WizardPageDemoFirstModule {}
