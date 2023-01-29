import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ["h1{width: 100%; text-align: center; background-color: orange;}"]
})
export class AppComponent {
  title = 'Directivas con Angular';
  mensaje: string = "";
  registrado: boolean = false;

  registrarUsuario(): void{
    this.registrado = true;
    this.mensaje = "Usuario Registrado con Existo rey";
  }
}
