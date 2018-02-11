import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalculadoraModule } from './calculadora';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
