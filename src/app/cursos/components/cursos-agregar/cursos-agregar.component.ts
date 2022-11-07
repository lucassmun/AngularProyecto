import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioComponent } from 'src/app/components/formulario/formulario.component';
import { Curso } from '../../models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos-agregar',
  templateUrl: './cursos-agregar.component.html',
  styleUrls: ['./cursos-agregar.component.css']
})
export class CursosAgregarComponent implements OnInit {
  formulario: FormGroup;


  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { 
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl(),
      profesor: new FormControl(),
      inicio: new FormControl(),
      fin: new FormControl(),
      inscripcionAbierta: new FormControl()
    });
  }

  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.inicio,
      fechaFin: this.formulario.value.fin,
      profesor: this.formulario.value.profesor,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: 'https://i.blogs.es/5d0d96/photoshop/450_1000.webp'
    };
    console.log(curso);
    this.cursoService.agregarCurso(curso);
    this.router.navigate(['cursos/cursos-lista']); // localhost/cursos/listar
  
  }

  ngOnInit(): void {
  }

}
