import { Injectable } from '@angular/core';

/*Para usar o serviço Http tem que fazer o import do módulo HTTP
no modulo que nesse caso tem que fazer
import { HttpModule } from '@angular/http'; no arquivo conversor.module.ts*/
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { 
	Conversao,
	ConversaoResponse 
} from '../models';

@Injectable()
export class ConversorService {

  private readonly BASE_URL = "http://api.fixer.io/latest";

  constructor(private http: Http) {}

  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param Conversao conversao
   * @return Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<ConversaoResponse> {
  	let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

    /*Para usar o "map" e o "catch" foi preciso ir no arquivo polyfills.ts
     e importar no final do arquivo: 
      import 'rxjs/add/operator/map';
      import 'rxjs/add/operator/catch';
     */
  	return this.http
      .get(this.BASE_URL + params)
      .map(response => response.json() as ConversaoResponse)
      .catch(error => Observable.throw(error));
  }

  /**
   * Retorna a cotação para dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, 
		conversao: Conversao): number {
  	if (conversaoResponse === undefined) {
  		return 0;
  	}

  	return conversaoResponse.rates[conversao.moedaPara];
  }

  /**
   * Retorna a cotação de dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, 
		conversao: Conversao): string {
  	if (conversaoResponse === undefined) {
  		return '0';
  	}

  	return (1 / conversaoResponse.rates[conversao.moedaPara])
  		.toFixed(4);
  }

  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.date;
  }

}
