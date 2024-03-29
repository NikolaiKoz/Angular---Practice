import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from "./empleados/empleados.component";
import { EmpleadoComponent } from './empleado/empleado.component';
import { EjemploTirarComponent } from './ejemplo-tirar/ejemplo-tirar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent, EjemploTirarComponent],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
