import { Component, OnInit } from '@angular/core';

import { MoedaService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  constructor(private moedaService: MoedaService) { }

  ngOnInit() {
  }

}
