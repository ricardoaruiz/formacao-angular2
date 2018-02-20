import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*é preciso importar esse módulo para que o serviço "conversor.service.ts"
consiga importar o serviço HTTP para fazer chamada a API externa */
import { HttpModule } from '@angular/http';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    ConversorComponent
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
