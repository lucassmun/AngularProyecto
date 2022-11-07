import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [{
  id: 1,
  nombre: 'Photoshop',
  comision: '33245',
  profesor: 'Julian Castro',
  fechaInicio: new Date(2022,9,20),
  fechaFin: new Date(2023,0,20),
  inscripcionAbierta: true,
  imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
  },
  {
    id: 2,
    nombre: 'Illustrator',
    comision: '02013',
    profesor: 'Emiliano Mora',
    fechaInicio: new Date(2022,11,2),
    fechaFin: new Date(2023,2,2),
    inscripcionAbierta: true,
    imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
  },
  {
      id: 3,
      nombre: 'Photoshop',
      comision: '34555',
      profesor: 'Sofia Moreno',
      fechaInicio: new Date(2022,3,20),
      fechaFin: new Date(2022,6,20),
      inscripcionAbierta: false,
      imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
  },
  {
    id: 4,
    nombre: 'Photoshop',
    comision: '34555',
    profesor: 'Sofia Moreno',
    fechaInicio: new Date(2022,3,20),
    fechaFin: new Date(2022,6,20),
    inscripcionAbierta: false,
    imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
}
];
  private cursosSubect: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursosSubect = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.cursosSubect.asObservable();
  }

  obtenerCurso(id: number): Observable<Curso[]>{
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id))
    )
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubect.next(this.cursos);
  }

  editarCurso(curso: Curso){
    let indice = this.cursos.findIndex((c: Curso) => c.id === curso.id );

    if(indice > -1){
      this.cursos[indice] = curso;
    }

    this.cursosSubect.next(this.cursos)

  }

  eliminarCurso(id: number){

    let indice = this.cursos.findIndex((c: Curso) => c.id === id );

    if(indice > -1){
      this.cursos.splice(indice, 1);
    }

    this.cursosSubect.next(this.cursos)
  }
}
