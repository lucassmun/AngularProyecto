import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso';
import { CursoService } from 'src/app/cursos/services/curso.service';
import { CursoState } from '../../models/curso.state';
import { loadCursosFailure, loadCursosSuccess } from '../../state/actions/cursos.action';
import { selectStateCargando, selectStateCursos } from '../../state/selectors/cursos.selector';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  cargando$!: Observable<boolean>;
  suscripcionCursos!: Subscription; 

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private store: Store<CursoState>
  ) {
    this.cursos$ = this.store.select(selectStateCursos);
    this.cargando$ = this.store.select(selectStateCargando);
   }

   ngOnInit(): void {
    this.cursoService.obtenerCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.store.dispatch(loadCursosSuccess({cursos}));
      },
      error: (error: any) => {
        alert("Hubo un error")
        this.store.dispatch(loadCursosFailure(error));
      }
    });
  }

  ngOnDestroy(): void{
    this.suscripcionCursos.unsubscribe();
  }

  eliminarCurso(id: number){
    this.cursoService.eliminarCurso(id);
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  editarCurso(curso : Curso){
    this.router.navigate(['cursos/cursos-editar', {
      id: curso.id,
      nombre: curso.nombre,
      comision: curso.comision,
      profesor: curso.profesor,
      fechaInicio: curso.fechaInicio,
      fechaFin: curso.fechaFin,
      inscripcionAbierta: curso.inscripcionAbierta

    }
  ]);
  }
  }
  
function cargarCursos(): any {
  throw new Error('Function not implemented.');
}

