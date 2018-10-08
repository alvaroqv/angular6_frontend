import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorteiosHomeComponent } from './pages/sorteios-home/sorteios-home.component';
import { SorteiosListComponent } from './components/sorteios-list/sorteios-list.component';
import { SorteiosDetailComponent } from './components/sorteios-detail/sorteios-detail.component';
import { SorteiosFormComponent } from './components/sorteios-form/sorteios-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SorteiosHomeComponent, SorteiosListComponent, SorteiosDetailComponent, SorteiosFormComponent]
})
export class SorteiosModule { }
