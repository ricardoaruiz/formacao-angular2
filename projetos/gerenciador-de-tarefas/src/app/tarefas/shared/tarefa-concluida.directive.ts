import { 
  Directive,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  /* recebe o valor se a tarefa está concluída do objeto que usa
     a diretiva.*/
  @Input() tarefaConcluida: boolean;

  /**
   * ElementRef fornece através da injeção de dependências do angular
   * uma referência do elemento que está usando a diretiva.
   * @param el 
   */
  constructor(private el: ElementRef) { }

  /** 
   * Método da interface OnInit
  */
  ngOnInit() {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
