// Angular Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App Components
import { EmpleadosComponent } from './modules/empleados/empleados.component';
import { FrutaComponent } from './modules/fruta/fruta.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:page', component: ContactComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
