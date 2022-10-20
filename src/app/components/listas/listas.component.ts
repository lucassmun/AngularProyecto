import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Persona } from 'src/app/models/persona';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
      variableNota: number = 4;
      
  listaNombres: Array<Persona> = [
    {nombre: 'Diego', apellido: 'Ramonda', edad: 20, nota: 8},
    {nombre: 'Gregorio', apellido: 'Rosales', edad: 26, nota: 4},
    {nombre: 'Luciano',  apellido: 'Mendoza', edad: 21, nota: 2},
    {nombre: 'Pamela',  apellido: 'Peña', edad: 33, nota: 10},
    {nombre: 'Eugenia', apellido: 'Lucero',  edad: 18, nota:3},

  ];
  
  cursos!: Curso[];

  constructor(
    private cursoService: CursoService
  ){
    console.log('Paso 1');
    cursoService.obtenerCursosPromise().then((valor: Curso[]) =>{
      this.cursos = valor;
      console.log(valor);
    }).catch((error: any) =>{
      console.log(error);
    });
    
    cursoService.obtenerCursosObservable().subscribe({
      next: (cursos: Curso[])  => {
        this.cursos = cursos;
        console.log(cursos);
      },
      error: (error) =>{
        console.error(error);
      }
      
    })
    console.log('Paso 3')
  }


  ngOnInit(): void {
  }

}
