import { Component, OnInit } from '@angular/core';

import { DadosService } from './dados.service';

// Declaração da biblioteca externa do google.
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Dados que virão da camada de serviço
  private dados: any;

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.dadosService.obterDados()
      .subscribe(
        (dados) => {
          this.dados = dados;
          this.init();
        }
      );
  }

  /** 
   * Inicializa a API de gráficos com delay de 1 segundo
   * o que permite a integração da API com o Angular.
  */
  init(): void {
    if (typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      } ,1000);
    }
  }

  exibirGraficos(): void {
    this.exibirPieChart();
  }

  /** 
   * Exibe o gráfico Pie Chart
  */
  exibirPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /** 
   * Cria e retorna o objeto DataTable da API de gráficos,
   * responsável por definir os dados do gráfico.
   * 
   * @returns any
  */
  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * Retorna as opções de gráfico, que incluem o título
   * e tamanho do gráfico.
   */
  obterOpcoes(): any {
    return {
      'title': 'Quantidade de cadastros no primeiro semestre',
      'width': 400,
      'height': 300
    }
  }
}
