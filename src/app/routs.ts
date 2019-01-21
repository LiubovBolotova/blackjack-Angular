import { Routes } from '@angular/router';
import { SidebarComponent } from './app.component/sidebar/sidebar.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'sidebar',
    pathMatch: 'full',
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
    children: [{}],
  },
];
