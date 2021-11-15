import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneradorAleatorio } from './componentes/generador-aleatorio/generador-aleatorio.component';
import { FormsModule } from '@angular/forms';
import { ResultadosComponent } from './componentes/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneradorAleatorio,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
