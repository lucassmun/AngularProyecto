import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Curso } from '../../models/curso';

@Injectable()
export class CursoService {
private cursos: Curso[] = [{
  nombre: 'Photoshop',
  comision: '33245',
  profesor: 'Julian Castro',
  fechaInicio: new Date(2022,9,20),
  fechaFin: new Date(2023,0,20),
  inscripcionAbierta: true,
  imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
  },
  {
    
    nombre: 'Illustrator',
    comision: '02013',
    profesor: 'Emiliano Mora',
    fechaInicio: new Date(2022,11,2),
    fechaFin: new Date(2023,2,2),
    inscripcionAbierta: true,
    imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
  },
  {
    
    nombre: 'Photoshop',
      comision: '34555',
      profesor: 'Sofia Moreno',
      fechaInicio: new Date(2022,3,20),
      fechaFin: new Date(2022,6,20),
      inscripcionAbierta: false,
      imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
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
