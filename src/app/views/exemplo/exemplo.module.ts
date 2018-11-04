import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemploHomeComponent } from './pages/exemplo-home/exemplo-home.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ExemploRoutes } from 'src/app/views/exemplo/exemplo.routing';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { MapasComponent } from './components/mapas/mapas.component';
import { StepsComponent } from './components/steps/steps.component';
import { CrudtableComponent } from './components/crudtable/crudtable.component';
import { CalendarioComponent } from './components/calendario/calendario.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExemploRoutes)
  ],
  declarations: [ExemploHomeComponent, GraficosComponent, DashboardComponent, DragdropComponent, MapasComponent, StepsComponent, CrudtableComponent, CalendarioComponent]
})
export class ExemploModule { }
