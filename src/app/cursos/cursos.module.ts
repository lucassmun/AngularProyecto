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
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { cursosFeatureKey, reducer } from './state/reducers/cursos.reducer';



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
    SharedModule,
    MatIconModule,
    CoreModule,
    HttpClientModule,
    AutenticacionModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature(cursosFeatureKey, reducer)
    
   
    
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
