import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneradorAleatorio } from './componentes/generador-aleatorio/generador-aleatorio.component';
import { ItemsComponent } from './componentes/items/items.component';
import { ItemComponent } from './componentes/item/item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GeneradorAleatorio,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
