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

}
