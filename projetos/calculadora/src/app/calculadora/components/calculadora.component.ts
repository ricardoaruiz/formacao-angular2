import { Component, OnInit } from '@angular/core';

/** Importando o service para ser injetado */
import { CalculadoraService } from '../services';

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

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  /** 
   * Construtor do componente.
   * Aqui está definida a injeção do serviço CalculadoraService
  */
  constructor(private calculadoraService: CalculadoraService) { }

  /**
  * O método ngOnInit é um método dessa interface que é chamado logo que o objeto 
  * é construído.
  * Local mais indicado para inicializar todos os recursos do componente.
  */
  ngOnInit() {
    this.limpar();
  }

  /**
   * Inicializa todos os operadores para os valores padrão.
   * 
   * @return void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = '0';
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Retorna o valor concatenado. Trata o separador decimal.
   * 
   * @param numAtual 
   * @param numConcat 
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  /**
   * Caso já possua uma operação selecionada, executa a
   * operação anterior e define a nova operação.
   * @param operacao 
   */
  definirOperacao(operacao: string): void {
    //apenas define a operação caso não exista
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    /* caso a operação definida e numero 2 selecionado,
       efetua o cálculo da operação.*/
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);

      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * Efetua o cálculo de uma operação.
   * 
   * @return void
   */
  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }

  /**
   * Retorna o vaor a ser exubudo na tela da calculadora.
   * 
   * @return string
   */
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }

}
