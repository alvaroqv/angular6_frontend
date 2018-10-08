import { Routes } from '@angular/router';
import { SorteiosHomeComponent } from 'src/app/views/admin-sorteios/pages/sorteios-home/sorteios-home.component';


export const AdminSorteiosRoutes: Routes = [
  {
    path: '',
    component: SorteiosHomeComponent,
    data: { title: 'Home', breadcrumb: 'Home' }
  }
];