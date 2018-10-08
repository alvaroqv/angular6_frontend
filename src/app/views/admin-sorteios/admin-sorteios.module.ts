import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SorteiosListComponent } from './components/sorteios-list/sorteios-list.component';
import { SorteiosHomeComponent } from './pages/sorteios-home/sorteios-home.component';
import { SorteiosDetailComponent } from './components/sorteios-detail/sorteios-detail.component';
import { AdminSorteiosRoutes } from 'src/app/views/admin-sorteios/admin-sorteios.routing';
import { SorteiosFormComponent } from './components/sorteios-form/sorteios-form.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminSorteiosRoutes)
  ],
  declarations: [SorteiosListComponent, SorteiosHomeComponent, SorteiosDetailComponent, SorteiosFormComponent]
})
export class AdminSorteiosModule { }
