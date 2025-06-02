import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
