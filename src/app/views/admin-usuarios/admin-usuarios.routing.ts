import { Routes } from '@angular/router';
import { UsuariosHomeComponent } from './pages/usuarios-home/usuarios-home.component';



export const AdminUsuariosRoutes: Routes = [
  {
    path: '',
    component: UsuariosHomeComponent,
    data: { title: 'Home', breadcrumb: 'Home' }
  }
];