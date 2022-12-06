import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CursoState } from '../../models/curso.state';
import { loadCursos } from '../../state/actions/cursos.action';

@Component({
  selector: 'app-cursos-vista',
  templateUrl: './cursos-vista.component.html',
  styleUrls: ['./cursos-vista.component.css']
})
export class CursosVistaComponent implements OnInit {

  constructor(
   
  ) { }

  ngOnInit(): void {
   
  }

}
