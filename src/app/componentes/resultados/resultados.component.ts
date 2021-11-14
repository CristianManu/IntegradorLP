import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  @Input() item : number [] = new Array();

  constructor() { }

  ngOnInit(): void {
  }

}
