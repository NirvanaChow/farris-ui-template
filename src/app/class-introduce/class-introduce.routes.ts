import { Routes, RouterModule } from '@angular/router';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { ClassFlexComponent } from './class-flex/class-flex.component';
import { ClassHiddenComponent } from './class-hidden/class-hidden.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { ClassInputComponent } from './class-input/class-input.component';

import { VerifyFlexComponent } from './verify-flex/verify-flex.component';
import { VerifyGridComponent } from './verify-grid/verify-grid.component';
import { ClassImageComponent } from './class-image/class-image.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: 'css-form', component: ClassFormComponent },
      { path: 'css-flex', component: ClassFlexComponent },
      { path: 'css-overflow', component: ClassHiddenComponent },
      { path: 'css-input', component: ClassInputComponent },
      { path: 'verify-flex', component: VerifyFlexComponent },
      { path: 'verify-grid', component: VerifyGridComponent },
      { path: 'image', component: ClassImageComponent }
    ]
  }
  /**/
];

export const ClassIntroduceModuleRouter = RouterModule.forChild(routes);
