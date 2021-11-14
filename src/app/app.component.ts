import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facultad de ciencias de la Administracion - UNER';
  subtitle = 'Trabajo Integrador de Contenidos 2021 - Angular';
  integrantes : string [] = [
  "Cristian Manuel Lopez",
  "Bautista Orge Perilli",
  "Luciano Stipicevich"
  ]

}
