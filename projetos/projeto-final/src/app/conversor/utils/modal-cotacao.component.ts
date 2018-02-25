// Importação das bibliotecas Angular
import { 
  Component, 
  OnInit, 
  EventEmitter, 
  Input, 
  Output 
} from '@angular/core';

// Importação dos modelos do componente
import { 
  Conversao, 
  ConversaoResponse 
} from '../models';

// Importação dos serviços do componente
import { 
  ConversorService 
} from '../services';

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  /* Aqui são as informações que esse componente precisa receber
     de outros componenentes. Então são declarados e passados na 
     utilização desse componenten. */
  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();

  /* Aqui são informações que esse componente chamará de outros
     componentes. Nesse caso quando clicar no botão "nova consulta"
     chamará um método do componente de conversão para inicializar
     uma nova consulta.
  */
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  // Injeta o serviço ConversorService.
  constructor(private conversorService: ConversorService) { }

  ngOnInit() {
  }

  /* Esse método chamará o método recebido no parâmetro onConfirm.
     
     Quem passou esse valor foi o conversor.component.html quando 
     chamou o componente modal-componente. 
     
     Nesse caso o onConfirm.emit() chamara o método init() do 
     componente conversor.componente.

    Ex:
    <modal-cotacao
      [id]="'modalCotacao'"
      [conversaoResponse]="conversaoResponse"
      [conversao]="conversao"
      (onConfirm)="init()">
    </modal-cotacao>
  */
  novaConsulta() {
    this.onConfirm.emit();
  }

  /**
   * Retorna o valor convertido para ser exibido no modal.
   */
  get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }
    return (this.conversao.valor * 
      this.conversaoResponse.rates[this.conversao.moedaPara])
        .toFixed(2);
  }

  /**
   * Retorna a moeda para qual a conversão foi realizada.
   */
  get cotacaoPara(): number {
    return this.conversorService.cotacaoPara(
      this.conversaoResponse, this.conversao);
  }

  /**
   * Retorna a moeda base que a conversão foi realizada.
   */
  get contacaoDe(): string {
    return this.conversorService.cotacaoDe(
      this.conversaoResponse, this.conversao);
  }

  /**
   * Retorna a data da cotação.
   */
  get dataCotacao(): string {
    return this.conversorService.dataCotacao(this.conversaoResponse);
  }

}