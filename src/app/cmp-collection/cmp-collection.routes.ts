import { Routes, RouterModule } from '@angular/router';
import { RootCmpComponent } from './root-cmp/root-cmp.component';

const routes: Routes = [
  {
    path: '',
    component: RootCmpComponent
  }
  /**/
];

export const CmpCollectionModuleRouter = RouterModule.forChild(routes);
