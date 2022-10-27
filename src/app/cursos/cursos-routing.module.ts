import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from '../components/pagina-no-encontrada/pagina-no-encontrada.component';
import { CursosAgregarComponent } from './components/cursos-agregar/cursos-agregar.component';
import { CursosCardsComponent } from './components/cursos-cards/cursos-cards.component';
import { CursosEditarComponent } from './components/cursos-editar/cursos-editar.component';
import { CursosVistaComponent } from './components/cursos-vista/cursos-vista.component';

const routes: Routes = [
  {path: 'cursos', component: CursosVistaComponent, children: [
    {path: "cursos-lista", component: CursosCardsComponent},
    {path: 'cursos-editar', component: CursosEditarComponent},
    {path: 'cursos-agregar', component: CursosAgregarComponent}
  ]},
  {path: '', redirectTo: 'cursos', pathMatch: 'full'},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
