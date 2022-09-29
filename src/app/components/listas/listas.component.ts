import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
      variableNota: number = 4;

  listaNombres: Array<Persona> = [
    {nombre: 'Diego', edad: 20, nota: 8},
    {nombre: 'Gregorio', edad: 26, nota: 4},
    {nombre: 'Luciano', edad: 21, nota: 2},
    {nombre: 'Pamela', edad: 33, nota: 10},
    {nombre: 'Eugenia', edad: 18, nota:3},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
