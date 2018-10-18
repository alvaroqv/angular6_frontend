import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from 'src/app/core/layout/layout.component';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { LoaderComponent } from 'src/app/core/layout/loader/loader.component';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    PanelMenuModule,
    BreadcrumbModule
  ],
  entryComponents: [ LoaderComponent],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, BreadcrumbComponent, LoaderComponent],
  exports: [LayoutComponent,LoaderComponent]
})
export class CoreModule { }
