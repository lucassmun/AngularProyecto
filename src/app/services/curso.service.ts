import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
private cursos: Curso[] = [
  {
    nombre: 'Diseño Gráfico',
    comision: '220033',
    profesor: 'Valerio Massa',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    inscripcionAbierta: true,
    imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp'
  },
  {
    nombre: 'Diseño Gráfico',
    comision: '220033',
    profesor: 'Valerio Massa',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    inscripcionAbierta: true,
    imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp'
  },
  {
    nombre: 'Diseño Gráfico',
    comision: '220033',
    profesor: 'Valerio Massa',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    inscripcionAbierta: true,
    imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp'
  }
];

  constructor() { }


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
    return of(this.cursos)
  }

}
