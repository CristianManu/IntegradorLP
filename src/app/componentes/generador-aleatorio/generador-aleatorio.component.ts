import { Component } from '@angular/core';

@Component({
    selector: 'generador-aleatorio',
    templateUrl : 'generador-aleatorio.component.html',
    styleUrls: ['./generador-aleatorio.component.css']
})

export class GeneradorAleatorio{

    public primernumero: number = 0;
    public segundonumero: number = 0;
    public numeroaleatorio: number = 0;
    public cantresultados: number = 0;
    public resultados: number [] = new Array();

    constructor(){
        console.log("Componente generador cargado");
        console.log(this.primernumero, this.segundonumero, this.resultados, this.numeroaleatorio);
    }

    randomNumber(min : number, max : number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    onSubmit(){
        this.numeroaleatorio = this.randomNumber(this.primernumero,this.segundonumero);
        var result : number [] = new Array(this.cantresultados);
        for (let index = 0; index < result.length; index++) {
            result[index] = this.randomNumber(this.primernumero,this.segundonumero);
        }
        this.resultados = result;
        console.log(this.primernumero, this.segundonumero, this.resultados, this.numeroaleatorio, this.cantresultados);
    }

}