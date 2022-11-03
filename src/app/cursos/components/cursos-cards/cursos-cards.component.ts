import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/cursos/models/curso';

@Component({
  selector: 'app-cursos-cards',
  templateUrl: './cursos-cards.component.html',
  styleUrls: ['./cursos-cards.component.css']
})
export class CursosCardsComponent implements OnInit {
  cursos: Curso[] = [
    {
      id:4,
      nombre: 'Photoshop',
      comision: '33245',
      profesor: 'Julian Castro',
      fechaInicio: new Date(2022,9,20),
      fechaFin: new Date(2023,0,20),
      inscripcionAbierta: true,
      imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
    },

    {
      id: 5,
      nombre: 'Illustrator',
      comision: '02013',
      profesor: 'Emiliano Mora',
      fechaInicio: new Date(2022,11,2),
      fechaFin: new Date(2023,2,2),
      inscripcionAbierta: true,
      imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
    },

    {
      id:6,
      nombre: 'Photoshop',
      comision: '34555',
      profesor: 'Sofia Moreno',
      fechaInicio: new Date(2022,3,20),
      fechaFin: new Date(2022,6,20),
      inscripcionAbierta: false,
      imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
    },



    {
      id:7,
      nombre: 'Dibujo',
      comision: '324122',
      profesor: 'Pablo Suarez',
      fechaInicio: new Date(2022,9,20),
      fechaFin: new Date(2023,1,20),
      inscripcionAbierta: true,
      imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
    },


    {
      id:8,
      nombre: 'Ilustración digital',
      comision: '223411',
      profesor: 'Paula Sosa',
      fechaInicio: new Date(2022,9,20),
      fechaFin: new Date(2023,1,20),
      inscripcionAbierta: false,
      imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
    },

    {
      id:9,
      nombre: 'Premiere Pro',
      comision: '021311',
      profesor: 'Florencia Jara',
      fechaInicio: new Date(2022,9,20),
      fechaFin: new Date(2023,1,20),
      inscripcionAbierta: true,
      imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}