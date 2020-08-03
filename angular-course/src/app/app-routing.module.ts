import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Componenets
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { FrutaComponent } from './components/fruta/fruta.component';

const routes: Routes = [
  { path: '', component: EmpleadosComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: '**', component: EmpleadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
