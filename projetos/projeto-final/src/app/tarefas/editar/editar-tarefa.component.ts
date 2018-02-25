import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;

  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private rout: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    /* O route permite pegar uma parâmetro vindo na URL e o + antes
      do this faz a conversão de string para numérico. */
    const id = +this.rout.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  alterar(): void {
    if (!this.formTarefa.form.errors) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
