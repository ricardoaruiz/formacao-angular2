/**
 * Para criar esse pipe, estando no diretório da aplicação 
 * digitar o seguinte comando:
 *  $ ng g pipe conversor/pipes/data-br
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  /**
   * Aplica formatação para a data
   * 
   * @param dataEn string dataEn
   * @returns string data no formato dd/mm/yyyy
   */
  transform(dataEn: string,): string {

    if (!dataEn) {
      return '';
    }

    const dataArr = dataEn.split('-');

    if (dataArr.length !== 3) {
      return dataEn;
    }

    return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
  }

}
