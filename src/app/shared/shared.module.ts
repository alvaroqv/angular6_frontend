import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePipe } from './pipe/base.pipe';
import { UsuariosComponent } from './ui/usuarios/usuarios.component';
import { SorteiosComponent } from './ui/sorteios/sorteios.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BasePipe, UsuariosComponent, SorteiosComponent]
})
export class SharedModule { }
