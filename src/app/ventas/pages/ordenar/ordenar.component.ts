import { Color, Heroe } from './../../interfaces/ventas.interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enMayusculas: boolean = false;

  ordenarPor: string = '';

  cambiaEstado() {
    this.enMayusculas = !this.enMayusculas;
  }

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredavil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde,
    },
  ];

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
    console.log(valor);
  }
}
