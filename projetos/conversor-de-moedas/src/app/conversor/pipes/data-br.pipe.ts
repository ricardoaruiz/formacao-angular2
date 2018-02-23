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

  transform(value: any, args?: any): any {
    return null;
  }

}
