/** 
 * Representação da resposta do serviço de conversão de moedas.
*/
export class ConversaoResponse {

    constructor(
        private base: string,
        private date: string,
        private rates: any
    ) {}

}
//{"base":"USD","date":"2017-03-08","rates":{"BRL":3.1405}}