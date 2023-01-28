import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusquedaComponent } from './Componets/busqueda/busqueda.component';
import { HomeComponent } from './Componets/home/home.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'busqueda' , component:BusquedaComponent},
  {path:'buscar/:artista', component:BusquedaComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
