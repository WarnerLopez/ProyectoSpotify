import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { BusquedaComponent } from './Componets/busqueda/busqueda.component';
import { HomeComponent } from './Componets/home/home.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'busqueda' , component:BusquedaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
