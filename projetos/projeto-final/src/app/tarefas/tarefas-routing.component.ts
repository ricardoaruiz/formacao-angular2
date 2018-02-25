/**
 * Esse componente é criado para que todos os componentes desse
 * módulo renderizem dentro da tag <router-outlet> declarada aqui.
 * Esse conteúdo por sua vez, será renderizado na tag <router-outlet>
 * do componente principal da aplicação que por sua vez será renderizado
 * na tag <app-root> do index.html
 */
import { Component } from '@angular/core';

@Component({
    template: '<router-outlet></router-outlet>'
})
export class TarefasRoutingComponent {}