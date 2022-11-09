import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../../models/persona';

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(value: Persona, ...args: string[]): string {
    return value.apellido;
  }

}
