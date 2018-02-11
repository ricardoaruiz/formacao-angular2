import { Component, OnInit } from '@angular/core';

/** 
 * selector -> seria o nome da tag a ser utilizado no html Ex: <app-calculadora>.
 * templateUrl -> é o arquivo html que o componente utiliza para sua rendenrização.
 * template -> seria o html direto a ser renderizado. Indicado para casos específicos onde
 *             o html é curto
 * styleUrls -> é uma lista com as folhas de estilo do componente.
*/
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

/**
 * Classe do componente que implementa a interface OnInit que é necessário para 
 * o ciclo de vida do Angular. 
 * O método ngOnInit é um método dessa interface que é chamado logo que o objeto 
 * é construído.
 */
export class CalculadoraComponent implements OnInit {

  /** 
   * Construtor do componente.
  */
  constructor() { }

  /**
  * O método ngOnInit é um método dessa interface que é chamado logo que o objeto 
  * é construído.
  * Local mais indicado para inicializar todos os recursos do componente.
  */
  ngOnInit() {
  }

}
