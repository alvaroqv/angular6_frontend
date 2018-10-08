import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, HomeDetailComponent]
})
export class HomeModule { }
