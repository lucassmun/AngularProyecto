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
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './cursos/cursos.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HeaderComponent,
    NombreApellidoPipe,
    TituloCabeceraDirective,
    InicioComponent,
    ListasComponent,
    PaginaNoEncontradaComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CursosModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
