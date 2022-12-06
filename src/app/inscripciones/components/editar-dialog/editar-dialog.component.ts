import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso';
import { CursoState } from 'src/app/cursos/models/curso.state';
import { selectStateCursos } from 'src/app/cursos/state/selectors/cursos.selector';
import { Inscripcion } from 'src/app/models/inscripcion';
import { editarInscripcion } from '../../state/inscripciones.actions';
import { InscripcionState } from '../../state/inscripciones.reducers';

@Component({
  selector: 'app-editar-dialog',
  templateUrl: './editar-dialog.component.html',
  styleUrls: ['./editar-dialog.component.css']
})
export class EditarDialogComponent implements OnInit {
  cursos$!: Observable<Curso[]>
  formulario!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public inscripcion: Inscripcion,
    private storeCursos: Store<CursoState>,
    private storeInscripciones: Store<InscripcionState>
    
  ) { 
    this.formulario = new FormGroup({
      curso: new FormControl(this.inscripcion.curso)
    })
  }

  ngOnInit(): void {
    this.cursos$ = this.storeCursos.select(selectStateCursos)
  }


  cancelar(){
    this.dialogRef.close()
  }

  editar(){
    const i: Inscripcion = {
      id: this.inscripcion.id,
      estudiante: this.inscripcion.estudiante,
      curso: this.formulario.value.curso
    }
    this.storeInscripciones.dispatch(editarInscripcion({inscripcion: i}));
    this.dialogRef.close();
  }

}
