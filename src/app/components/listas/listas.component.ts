import { Component, OnInit } from '@angular/core';
import { filter, from, map, of } from 'rxjs';
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


  cursos$ = this.cursoService.obtenerCursosObservable();
  
  cursosPromise = this.cursoService.obtenerCursosPromise();
  cursosSubject: any;

  


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
    from(this.cursos).pipe(
        filter((curso: Curso) => curso.nombre === 'Photoshop')
       )
  }

  agregarCurso(){
    let curso: Curso = {
      nombre: 'Fundamentos del diseño',
      comision: '220033',
      profesor: 'Valerio Massa',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      inscripcionAbierta: true,
      imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp'
    }
  this.cursoService.agregarCurso(curso);
}
  }



