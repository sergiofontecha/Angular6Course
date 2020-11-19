// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// App Components
import { AppComponent } from './app.component';
import { FrutaComponent } from 'src/app/modules/fruta/fruta.component';
import { EmpleadosComponent } from 'src/app/modules/empleados/empleados.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';

// App Services, Pipelines, Intefaces And More
import { MathPipe } from './shared/pipes/mathPipe';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    HomeComponent,
    ContactComponent,
    NavigatorComponent,
    MathPipe
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
