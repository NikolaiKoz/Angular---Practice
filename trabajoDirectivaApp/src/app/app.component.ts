import { Component } from '@angular/core';

interface Entrada {
  titulo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ["h1{width: 100%; text-align: center; background-color: orange;}"]
})


export class AppComponent {
  title = 'Directivas con Angular';
  mensaje: string = "";
  registrado: boolean = false;
  nombre: string = "";
  apellido: string = "";
  entradas: Entrada[];


  constructor(){
    this.entradas = [
      {titulo:"titulo 1"},
      {titulo:"titulo 2"},
      {titulo:"titulo 3"},
      {titulo:"titulo 4"},
      {titulo:"titulo 5"},
    ];
  };

  registrarUsuario(): void{
    this.registrado = true;
    this.mensaje = "Usuario Registrado con Existo rey";
  }

}


