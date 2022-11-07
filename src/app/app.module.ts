import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListasComponent } from './components/listas/listas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { TituloCabeceraDirective } from './directives/titulo-cabecera.directive';
import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NombreApellidoPipe,
    TituloCabeceraDirective,
    ListasComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AutenticacionModule,
    CursosModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
