import { Routes, RouterModule } from '@angular/router';
import { NavDemosComponent } from './nav-demos/nav-demos.component';

const UIRoutes: Routes = [
  {
    path: '',
    component: NavDemosComponent
  }
];

export const ThemeStaticDemoRoutes = RouterModule.forChild(UIRoutes);
