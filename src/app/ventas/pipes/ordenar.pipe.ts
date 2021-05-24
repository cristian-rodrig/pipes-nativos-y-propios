import { Heroe } from './../interfaces/ventas.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], ordenarPor: string = 'sin valor'): Heroe[] {
    switch (ordenarPor) {
      case 'nombre':
        return heroes.sort((a: Heroe, b: Heroe) =>
          a.nombre > b.nombre ? 1 : -1
        );

      case 'vuela':
        return heroes.sort((a: Heroe, b: Heroe) =>
          a.vuela > b.vuela ? -1 : 1
        );

      case 'color':
        return heroes.sort((a: Heroe, b: Heroe) =>
          a.color > b.color ? 1 : -1
        );

      default:
        return heroes;
    }
  }
}
