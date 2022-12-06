import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeatureKey, reducer } from './state/inscripciones.reducers';
import { InscripcionesEffects } from './state/inscripciones.effects';
import { MaterialModule } from '../material.module';
import { EditarDialogComponent } from './components/editar-dialog/editar-dialog.component';


@NgModule({
  declarations: [
    InscripcionComponent,
    EditarDialogComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature(inscripcionesFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects])
  ]
})
export class InscripcionesModule { }
