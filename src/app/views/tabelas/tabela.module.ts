import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
 } from '@angular/material';
 import { FlexLayoutModule } from '@angular/flex-layout';

import { TabelaRoutes } from 'src/app/views/tabelas/tabela.routing';
import { TabelaComponent } from 'src/app/views/tabelas/tabela.component';




@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
    RouterModule.forChild(TabelaRoutes)
  ],
  declarations: [TabelaComponent]
})
export class TabelaModule { }
