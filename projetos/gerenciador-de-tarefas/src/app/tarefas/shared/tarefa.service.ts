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
  cadastrar(tarefa: Tarefa): number {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    this.persisteListaTarefas(tarefas);
    return tarefa.id;
  }

  /**
   * Busca uma tarefa do localStorage pelo seu id.
   * 
   * @param id 
   */
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  /**
   * Atualiza uma tarefa no localStorage.
   * 
   * @param tarefa 
   */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    this.persisteListaTarefas(tarefas);
  }

  /**
   * Remove uma tarefa do localStorage.
   * 
   * @param id 
   */
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    this.persisteListaTarefas(tarefas);
  }

  /**
   * Altera o status da tarefa no localStorage.
   * 
   * @param id 
   */
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((objTarefa, index, objTarefas) => {
      if (objTarefa.id === id) {
        objTarefas[index].concluida = !objTarefa.concluida;
      }
    });
    this.persisteListaTarefas(tarefas);
  }

  /**
   * Atualiza o chave tarefas no localStorage com uma nova
   * lista de tarefas informada.
   * 
   * @param tarefas lista de tarefas a ser atualizada.
   */
  persisteListaTarefas(tarefas: Tarefa[]): void {
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
