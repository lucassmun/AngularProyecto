import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListasComponent } from './components/listas/listas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NombreApellidoPipe } from './shared/pipes/nombre-apellido.pipe';
import { TituloCabeceraDirective } from './shared/directives/titulo-cabecera.directive';
import { AppRoutingModule } from './app-routing.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';









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
    AutenticacionModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    HttpClientModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
