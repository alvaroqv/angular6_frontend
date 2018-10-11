import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from 'src/app/core/layout/layout.component';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {PanelMenuModule} from 'primeng/panelmenu';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    PanelMenuModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class CoreModule { }
