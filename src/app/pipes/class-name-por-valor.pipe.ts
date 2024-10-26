import { Pipe, PipeTransform } from '@angular/core';

const CLASSES_PADRAO = {
  zero: 'zero',
  positivo: 'positivo',
  negativo: 'negativo',
};
export type ClassNamesDeValor = typeof CLASSES_PADRAO;

@Pipe({
  name: 'classNamePorValor',
  standalone: true
})
export class ClassNamePorValorPipe implements PipeTransform {

  /**
   * Retorna `'zero'`, `'positivo'` ou `'negativo'`, de acordo com o número especificado.
   *
   * @param valor Número a ser verificado.
   */
  public transform(
    valor: number,
    classes: ClassNamesDeValor = CLASSES_PADRAO,
  ): string {
    if (valor >= 0.005) {
      return classes.positivo;
    } else if (valor > -0.005 && valor < 0.005) {
      return classes.zero;
    } else {
      return classes.negativo;
    }
  }

}
