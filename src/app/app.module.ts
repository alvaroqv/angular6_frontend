import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BaseDirective } from './shared/directive/base.directive';
import { CoreModule } from 'src/app/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from 'src/app/core/layout/layout.component';
import { CartelasComponent } from 'src/app/views/cartelas/cartelas.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseDirective,
    CartelasComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
