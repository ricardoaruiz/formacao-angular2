//HostListener - anotação que fica escutando os eventos
//ElemtRef - utilizado para ter acesso ao objeto da tela
import { 
  Directive,
  HostListener,
  ElementRef
} from '@angular/core';

/*Esses imports são necessários para permitir a atualização do 
  ngModel quando o valor for alterado pela diretiva*/
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms'

@Directive({
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

  onChange: any;
  onTouched: any;

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    //Remove tudo que não é numero da string digitada
    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  /**
   * Registra a função a ser chamada para atualizar
   * valor na model para evento change
   * 
   * @param fn 
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registra a função a ser chamada para atualizar
   * valor na model para evento touched
   * 
   * @param fn 
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Obtém o valor contido na model.
   * Aqui o valor do elemento é alterado, e por sua vez o valor do model
   * também, pois estão lincados.
   * 
   * @param value 
   */
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

}
