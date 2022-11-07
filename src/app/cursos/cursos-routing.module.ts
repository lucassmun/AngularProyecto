import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosAgregarComponent } from './components/cursos-agregar/cursos-agregar.component';
import { CursosEditarComponent } from './components/cursos-editar/cursos-editar.component';
import { CursosVistaComponent } from './components/cursos-vista/cursos-vista.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const routes: Routes = [
  {path: '', component: CursosVistaComponent, children: [
    {path: "cursos-lista", component: ListaCursosComponent},
    {path: 'cursos-editar', component: CursosEditarComponent},
    {path: 'cursos-agregar', component: CursosAgregarComponent}
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
