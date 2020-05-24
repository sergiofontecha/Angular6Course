import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrutaComponent } from 'src/app/components/fruta/fruta.component';
import { EmpleadosComponent } from 'src/app/components/empleados/empleados.component';

@NgModule({
  declarations: [AppComponent, FrutaComponent, EmpleadosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
