import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListasComponent } from './components/listas/listas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modul';
import { CursosCardsComponent } from './components/cursos-cards/cursos-cards.component';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { TituloCabeceraDirective } from './directives/titulo-cabecera.directive';


@NgModule({
  declarations: [
    AppComponent,
    ListasComponent,
    FormularioComponent,
    HeaderComponent,
    CursosCardsComponent,
    BooleanATextoPipe,
    BooleanoEstiloDirective,
    NombreApellidoPipe,
    TituloCabeceraDirective,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
