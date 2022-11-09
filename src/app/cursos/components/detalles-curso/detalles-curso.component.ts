import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../../models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-detalles-curso',
  templateUrl: './detalles-curso.component.html',
  styleUrls: ['./detalles-curso.component.css']
})
export class DetallesCursoComponent implements OnInit {
  curso$!: Observable<Curso>;

  constructor(
    private activateRoute: ActivatedRoute,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) =>{
      let id = parseInt(parametros.get('id') || '0');

     this.curso$ = this.cursoService.obtenerCurso(id);  
    })
  }

}
