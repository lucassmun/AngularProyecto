import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { ListasComponent } from './components/listas/listas.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'alumnos', component: ListasComponent},
  {path: 'cursos', 
  loadChildren:() =>
  import('./cursos/cursos.module').then((m) => m.CursosModule),},
  {path: '**', component: PaginaNoEncontradaComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }