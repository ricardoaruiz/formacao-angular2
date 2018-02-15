import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TarefaService, Tarefa } from '../shared';
import { ViewChild } from '@angular/core/src/metadata/di';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;

  tarefa: Tarefa;

  constructor(
    private tarefaServico: TarefaService,
    private router: Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaServico.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
