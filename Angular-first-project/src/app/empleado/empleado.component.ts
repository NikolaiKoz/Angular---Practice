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
  empresa: string = "Mercado Libre";



  getNombre(){
    return this.nombre;
  }

  getEdad(){
    return this.edad;
  }

  // getEmpresa(){
  //   return this.empresa;
  // }

  textoDeRegistro: string = "No hay nadie registrado";

  llamaEmpresa(value: string){}

  habilitacionCuadro: boolean = false;

  userRegistrado: boolean = false;

  getRegistroUsuario(){
    this.userRegistrado = false;
  }

  setUsuarioRegistrado(event: Event){
    // alert ("Te estan hackeandoWEYYY");

  // alert(event.target)
  // console.log(event.target)

    // if((<HTMLInputElement>event.target).value == "si"){
    //   this.textoDeRegistro = "El usuario se acaba de registrar";
    // } else{
    //   this.textoDeRegistro = "No hay usuarios registrados";
    // }

    (<HTMLInputElement>event.target).value == "si" ? this.textoDeRegistro = "El usuario se acaba de registrar" : this.textoDeRegistro = "No hay usuarios registrados";


  }


}
