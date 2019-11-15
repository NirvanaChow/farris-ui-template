import { Routes, RouterModule } from '@angular/router';
import { OuterWizardPageSecondComponent } from './outer-wizard-page-second/outer-wizard-page-second.component';
const routes: Routes = [
  {
    path: '',
    component: OuterWizardPageSecondComponent
  }
];
export const WizardPageDemoSecondRoutes = RouterModule.forChild(routes);
