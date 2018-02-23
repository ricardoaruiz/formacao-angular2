import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*é preciso importar esse módulo para que o serviço "conversor.service.ts"
consiga importar o serviço HTTP para fazer chamada a API externa */
import { HttpModule } from '@angular/http';

/*é preciso importar esse módulo para conseguir usar os recursos de 
  formulário no componente, tanto no arquivo .ts quanto no arquivo
  .html
 */
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
