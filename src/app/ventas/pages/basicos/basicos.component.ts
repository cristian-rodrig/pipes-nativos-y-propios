import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'Cristian';
  nombreUpper: string = 'CRISTIAN';
  nombreCompleto: string = 'cRIStiaN roDRiGuEz';

  fecha: Date = new Date();
}
