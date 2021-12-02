import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';
import { SolicitudconsultaComponent } from './pages/solicitudconsulta/solicitudconsulta.component';

const routes: Routes = [
  { path : '' , component :  HomeComponent  },
  { path: 'quiensoy' , component : QuiensoyComponent },
  { path: 'consulta', component : SolicitudconsultaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
