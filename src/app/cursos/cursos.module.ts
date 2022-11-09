import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosCardsComponent } from './components/cursos-cards/cursos-cards.component';
import { CursosVistaComponent } from './components/cursos-vista/cursos-vista.component';
import { CursosAgregarComponent } from './components/cursos-agregar/cursos-agregar.component';
import { CursosEditarComponent } from './components/cursos-editar/cursos-editar.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BooleanATextoPipe } from '../shared/pipes/boolean-a-texto.pipe';
import { BooleanoEstiloDirective } from '../shared/directives/booleano-estilo.directive';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursoService } from './services/curso.service';
import { DetallesCursoComponent } from './components/detalles-curso/detalles-curso.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CursosEditarComponent,
    CursosAgregarComponent,
    CursosVistaComponent,
    CursosCardsComponent,
    BooleanATextoPipe,
    BooleanoEstiloDirective,
    ListaCursosComponent,
    DetallesCursoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CursosRoutingModule,
    SharedModule
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
