import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, arg2: boolean = true): string {
    // if (arg2) {
    //   return value.toUpperCase();
    // } else {
    //   return value.toLowerCase();
    // }
    return arg2 ? value.toUpperCase() : value.toLowerCase();
  }
}
