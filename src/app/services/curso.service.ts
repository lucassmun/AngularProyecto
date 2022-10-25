import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
private cursos: Curso[] = [{
    nombre: 'Diseño Gráfico',
    comision: '220033',
    profesor: 'Valerio Massa',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    inscripcionAbierta: true,
    imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp'
  },
  {
    nombre: 'Illustrator',
    comision: '220033',
    profesor: 'Valerio Massa',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    inscripcionAbierta: true,
    imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp'
  },
  {
    nombre: 'Premiere Pro',
    comision: '220033',
    profesor: 'Valerio Massa',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    inscripcionAbierta: true,
    imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp'
  }
];

cursosObservable: Observable<Curso[]>;
cursosSubject: BehaviorSubject<Curso[]>;



  constructor() { 
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);

    this.cursosObservable =new Observable<Curso[]>((suscriptor) => {
      suscriptor.next(this.cursos);

      setTimeout(() => {
        this.cursos.push({
          nombre: 'After Effect',
          comision: '220033',
          profesor: 'Valerio Massa',
          fechaInicio: new Date(),
          fechaFin: new Date(),
          inscripcionAbierta: true,
          imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp'
        });
        suscriptor.next(this.cursos);
      },2000)

    })

    
  }


  obtenerCursosPromise(): Promise<Curso[] | any>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay cursos disponibles'
        })
      }
    });
  }

  obtenerCursosObservable(){
    /* return this.cursosObservable; */
    /* this.cursosSubject.next(this.cursos); */
    return this.cursosSubject.asObservable();
  }

agregarCurso(curso : Curso){
  this.cursos.push(curso);
  this.cursosSubject.next(this.cursos);
}

}
