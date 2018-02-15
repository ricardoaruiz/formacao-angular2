import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable()
export class TarefaService {

  constructor() { }

  /**
   * Retorna as tarefas cadastradas no localStorage.
   * 
   * @returns: tarefas cadastradas.
   */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**
   * Cadastra uma nova tarefa no localStorage
   * 
   * @param tarefa 
   */
  cadastrar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
