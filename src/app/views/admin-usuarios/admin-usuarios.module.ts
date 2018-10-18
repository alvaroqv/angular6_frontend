import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosHomeComponent } from './pages/usuarios-home/usuarios-home.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { UsuariosDetailComponent } from './components/usuarios-detail/usuarios-detail.component';
import { UsuariosFormComponent } from './components/usuarios-form/usuarios-form.component';
import { RouterModule } from '@angular/router';
import { AdminUsuariosRoutes } from './admin-usuarios.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminUsuariosRoutes)
  ],
  declarations: [UsuariosHomeComponent, UsuariosListComponent, UsuariosDetailComponent, UsuariosFormComponent]
})
export class AdminUsuariosModule { }
