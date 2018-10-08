import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin-sorteios',
    loadChildren: './views/admin-sorteios/admin-sorteios.module#AdminSorteiosModule',
    data: { title: 'Forms', breadcrumb: 'FORMS'}
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
