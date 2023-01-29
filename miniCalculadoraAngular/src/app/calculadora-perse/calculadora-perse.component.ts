import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-perse',
  templateUrl: './calculadora-perse.component.html',
  styleUrls: ['./calculadora-perse.component.scss']
})
export class CalculadoraPerseComponent {

  numero1: number = 0;
  numer2: number = 0;
  result: number = 0;

  sumar(): void{
    this.result = this.numero1 + this.numer2;
  }

  restar(): void{
    this.result = this.numero1 - this.numer2;
  }

  multiplicar(): void{
    this.result = this.numero1 * this.numer2;
  }

  dividir(): void{
    this.result = this.numero1 / this.numer2;
  }

}
