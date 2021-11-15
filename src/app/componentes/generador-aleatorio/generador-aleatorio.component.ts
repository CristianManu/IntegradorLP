import { Component, Output, EventEmitter} from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
    selector: 'generador-aleatorio',
    templateUrl : 'generador-aleatorio.component.html',
    styleUrls: ['./generador-aleatorio.component.css']
})

export class GeneradorAleatorio{
    @Output() excep = new EventEmitter<string>();

    addNewExcep(value: string){
        this.excep.emit(value);
    }

    public primernumero: number = 0;
    public segundonumero: number = 0;
    public numeroaleatorio: number = 0;
    public cantresultados: number = 0;
    public resultados: number [] = new Array();

    constructor(){
        console.log("Componente generador cargado");
        console.log(this.primernumero, this.segundonumero, this.resultados, this.numeroaleatorio);
    }

    /**
     * Funcion randomNumber
     * 
     *  Funcion que devuelve un valor aleatorio entre dos numeros pasados como parametro
     * 
     * @param min 
     * @param max 
     * @returns un number redondeado.
     */
    randomNumber(min : number, max : number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    /**Funcion onSubmit 
     * 
     *  Esta funcion se encarga de realizar la logica de generacion de numeros aleatorios.
     */
    onSubmit(){
        if (this.segundonumero <= this.primernumero) {
            this.addNewExcep("El rango maximo no puede ser menor o igual que el minimo");
        }else{
            this.addNewExcep("");
        
        this.numeroaleatorio = this.randomNumber(this.primernumero,this.segundonumero);
        var result : number [] = new Array(this.cantresultados);
        for (let index = 0; index < result.length; index++) {
            result[index] = this.randomNumber(this.primernumero,this.segundonumero);
        }
        this.resultados = result;
        console.log(this.primernumero, this.segundonumero, this.resultados, this.numeroaleatorio, this.cantresultados);
        }
    }

}