/**
 * Serviço responsável por executar as operações da 
 * calculadora.
 * 
 * @author Ricardo A Ruiz<ricardo.almendro.ruiz@gmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  /*
    Define as constantantes utilizadas para identificar 
    as operações de cálculo
  */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = "*";

  constructor() { }

  /**
   * Método para realizar o cálculo matemático dado 
   * dois números.
   * Suporta as operações soma, subtração, divisão
   * e multiplicação.
   * 
   * @param num1 primeiro número informado para o cálculo
   * @param num2 segundo número informado para o cálculo
   * @param operacao operação matemática informada
   */
  calcular(num1: number, num2: number, operacao: string): number {

    let resultado: number; //armazena o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;        
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        return 0;
    }
    return resultado;
  }

}
