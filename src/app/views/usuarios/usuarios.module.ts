import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosHomeComponent } from './pages/usuarios-home/usuarios-home.component';
import { UsuariosDetailComponent } from './components/usuarios-detail/usuarios-detail.component';
import { UsuariosFormComponent } from './components/usuarios-form/usuarios-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuariosHomeComponent, UsuariosDetailComponent, UsuariosFormComponent]
})
export class UsuariosModule { }
