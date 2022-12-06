import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { ListasComponent } from './components/listas/listas.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'alumnos', component: ListasComponent},
  {path: 'recibi', component: FormularioComponent},
  {path: 'cursos', 
  loadChildren:() =>
  import('./cursos/cursos.module').then((m) => m.CursosModule)},
  { 
    path: 'autenticacion',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((m) => m.AutenticacionModule)
  },
  { 
    path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then((m) => m.InscripcionesModule)
  },
  {path: '**', component: PaginaNoEncontradaComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }