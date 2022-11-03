import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosCardsComponent } from './components/cursos-cards/cursos-cards.component';
import { CursosVistaComponent } from './components/cursos-vista/cursos-vista.component';
import { CursosAgregarComponent } from './components/cursos-agregar/cursos-agregar.component';
import { CursosEditarComponent } from './components/cursos-editar/cursos-editar.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BooleanATextoPipe } from '../pipes/boolean-a-texto.pipe';
import { BooleanoEstiloDirective } from '../directives/booleano-estilo.directive';
import { ListasComponent } from '../components/listas/listas.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';


@NgModule({
  declarations: [
    CursosEditarComponent,
    CursosAgregarComponent,
    CursosVistaComponent,
    CursosCardsComponent,
    BooleanATextoPipe,
    BooleanoEstiloDirective,
    ListaCursosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
