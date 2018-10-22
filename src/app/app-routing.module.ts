import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelayResolve } from 'src/app/core/layout/DelayRolver';
import { CartelasComponent } from 'src/app/views/cartelas/cartelas.component';

const routes: Routes = [
  {
    path: 'admin-sorteios',
    loadChildren: './views/admin-sorteios/admin-sorteios.module#AdminSorteiosModule',
    resolve: [DelayResolve],
    data: { title: 'Forms', breadcrumb: 'FORMS'}
  },
  {
    path: 'tabelas',
    loadChildren: './views/tabelas/tabela.module#TabelaModule',
    data: { title: 'Tables', breadcrumb: 'TABLES'}
  },
  { 
    path: 'cartelas', component: CartelasComponent, 
    data: { title: 'Cartelas' } 
  },
  {
    path: 'admin-usuarios',
    loadChildren: './views/admin-usuarios/admin-usuarios.module#AdminUsuariosModule',
    resolve: [DelayResolve],
    data: { title: 'Forms', breadcrumb: [
                            {label: 'Administrar Participantes', icon: 'fa fa-users', routerLink:['admin-usuarios']},
                            {label: 'Administrar Sorteios', icon: 'fa fa-gift', routerLink:['admin-sorteios']}
                          ]}
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
