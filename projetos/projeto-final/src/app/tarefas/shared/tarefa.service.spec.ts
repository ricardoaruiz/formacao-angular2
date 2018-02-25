import { TestBed, inject } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';
import { Tarefa } from './tarefa.model';

describe('TarefaService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [TarefaService]
    });
  });

  it('should be created', inject([TarefaService], (service: TarefaService) => {
    expect(service).toBeTruthy();
  }));

  it('deve cadastrar uma nova tarefa', 
    inject([TarefaService], (service: TarefaService) => {
      let tarefa = new Tarefa(null,'Tarefa 01',false);
      let idGerado = service.cadastrar(tarefa);
      let tarefaCadastrada = service.buscarPorId(idGerado);
      expect(tarefa.nome).toEqual(tarefaCadastrada.nome);
    })
  );

  it('deve alterar uma tarefa existente',
    inject([TarefaService], (service: TarefaService) => {

      let tarefa = new Tarefa(null,'Tarefa 01',false);
      let idGerado = service.cadastrar(tarefa);

      let tarefaCadastrada = service.buscarPorId(idGerado);
      expect(tarefaCadastrada.nome).toEqual('Tarefa 01');

      tarefa.nome = 'Tarefa alterada';
      service.atualizar(tarefa);

      tarefaCadastrada = service.buscarPorId(idGerado);
      expect(tarefaCadastrada.nome).toEqual('Tarefa alterada');

    })
  );

  it('deve alterar o status tarefa existente',
    inject([TarefaService], (service: TarefaService) => {

      let tarefa = new Tarefa(null,'Tarefa 01',false);
      let idGerado = service.cadastrar(tarefa);

      let tarefaCadastrada = service.buscarPorId(idGerado);
      expect(tarefaCadastrada.concluida).toEqual(false);

      service.alterarStatus(idGerado);

      tarefaCadastrada = service.buscarPorId(idGerado);
      expect(tarefaCadastrada.concluida).toEqual(true);

    })
  );

  it('deve remover uma tarefa cadastrada', 
    inject([TarefaService], (service: TarefaService) => {
      let tarefa = new Tarefa(null,'Tarefa 01',false);
      let idGerado = service.cadastrar(tarefa);

      let tarefaCadastrada = service.buscarPorId(idGerado);
      expect(tarefaCadastrada).not.toBeNull;

      service.remover(idGerado);
      tarefaCadastrada = service.buscarPorId(idGerado);
      expect(tarefaCadastrada).toBeNull;

    })
  );

  it('deve listar todas as tarefas cadastradas', 
    inject([TarefaService], (service: TarefaService) => {
      service.cadastrar(new Tarefa(null,'Tarefa 01'));
      service.cadastrar(new Tarefa(null,'Tarefa 02'));
      service.cadastrar(new Tarefa(null,'Tarefa 03'));
      
      let tarefas: Tarefa[] = service.listarTodos();
      expect(tarefas).not.toBeNull;
      expect(tarefas).length === 3;
      
    })
  );

});
