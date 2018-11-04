import { Routes } from '@angular/router';
import { ExemploHomeComponent } from 'src/app/views/exemplo/pages/exemplo-home/exemplo-home.component';
import { DashboardComponent } from 'src/app/views/exemplo/components/dashboard/dashboard.component';
import { GraficosComponent } from 'src/app/views/exemplo/components/graficos/graficos.component';
import { DragdropComponent } from 'src/app/views/exemplo/components/dragdrop/dragdrop.component';
import { MapasComponent } from 'src/app/views/exemplo/components/mapas/mapas.component';
import { StepsComponent } from 'src/app/views/exemplo/components/steps/steps.component';
import { CrudtableComponent } from 'src/app/views/exemplo/components/crudtable/crudtable.component';
import { CalendarioComponent } from 'src/app/views/exemplo/components/calendario/calendario.component';


export const ExemploRoutes: Routes = [
  {
    path: '',
    component: ExemploHomeComponent,
    data: { title: 'Home', breadcrumb: 'Home' }
  },
  {
    path: 'dashboard', component: DashboardComponent, data: { title: 'DashBoard', breadcrumb: 'Home - DashBoard' }
  },
  {
    path: 'grafico', component: GraficosComponent, data: { title: 'Graficos', breadcrumb: 'Home - Graficos' }
  },
  { path: 'dragdrop', component: DragdropComponent, data: { title: 'Drag and Drop', breadcrumb: 'Home - Drag and Drop' }
  },
  { path: 'mapas', component: MapasComponent, data: { title: 'Mapas', breadcrumb: 'Home - Mapas' }
  },
  { path: 'steps', component: StepsComponent, data: { title: 'Passo a Passo', breadcrumb: 'Passo a Passo' }
  },
  { path: 'crudtable', component: CrudtableComponent, data: { title: 'CRUD Table', breadcrumb: 'CRUD Table' }
  },
  { path: 'calendario', component: CalendarioComponent, data: { title: 'CRUD Table', breadcrumb: 'CRUD Table' }
  }
];