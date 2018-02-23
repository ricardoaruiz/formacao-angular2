import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DadosService {

  // Array bi-dimensional com dados para exibição no gráfico
  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro',68],
    ['Março',49],
    ['Abril',15],
    ['Maio',80],
    ['Junho',27]
  ];

  constructor() { }

  /** 
   * Retorna um observable com os dados a serem utilizados
   * para a montagem dos gráficos.
  */
  obterDados(): Observable<any> {
    return new Observable( (observable) => {
      observable.next(this.dados);
      observable.complete();
    });
  }

}
