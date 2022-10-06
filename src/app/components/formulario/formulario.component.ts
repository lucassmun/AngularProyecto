import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formularioUsuario: FormGroup;
 

  constructor(
    private fb: FormBuilder
  ) {
    this.formularioUsuario = fb.group({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$')]),
      celular: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d{6,10}$/)]),
      acepto: new FormControl(false, []),
    });
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
  
    /* this.formularioUsuario.addControl('control1', new FormControl('', [])); */

    /* console.log(this.formularioUsuario); */ 
    console.log(this.formularioUsuario);
  }

}


