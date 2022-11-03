import { Component, OnInit } from '@angular/core';
import { filter, from, map, of } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso';
import { Persona } from 'src/app/models/persona';
import { CursoService } from 'src/app/cursos/services/curso.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent{
      variableNota: number = 4;
      
  listaNombres: Array<Persona> = [
    {nombre: 'Diego', apellido: 'Ramonda', edad: 20, nota: 8},
    {nombre: 'Gregorio', apellido: 'Rosales', edad: 26, nota: 4},
    {nombre: 'Luciano',  apellido: 'Mendoza', edad: 21, nota: 2},
    {nombre: 'Pamela',  apellido: 'Peña', edad: 33, nota: 10},
    {nombre: 'Eugenia', apellido: 'Lucero',  edad: 18, nota:3},

  ];
  
}