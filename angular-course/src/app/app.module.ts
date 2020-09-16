// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// App Components
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
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
