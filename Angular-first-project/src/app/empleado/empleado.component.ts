import { Component } from '@angular/core';

//ESTO ES UN COMPONENTE INLINE

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
  // template: "<p class='empleado'>Este empleado funciona</p><span class='empleado__otro'>Si lo hace</span>",
  // styles: [".empleado__otro{color: purple;};.empleado__otro{background-color: red}"]
})


export class EmpleadoComponent {

  private nombre: string = "Jose";
  private edad: number = 27;
  //private empresa: string = "Autonomo con un suenio";


  getNombre(){
    return this.nombre;
  }

  getEdad(){
    return this.edad;
  }

  // getEmpresa(){
  //   return this.empresa;
  // }

  llamaEmpresa(value: String){}


}
