import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  solicitud = {
    nombre: "Ángel",
    apellidos: "Vitores Macón"
  }

  colorNombre = 'azul';
  colorApe = 'azul';

  nombre($event: KeyboardEvent){
    const element = $event.target as HTMLInputElement;

    if (element.value.length > 10) {
      this.colorNombre = 'rojo';
    }
    else {
      this.colorNombre = 'azul';
    }

    this.solicitud.nombre = element.value;
  }

  apellidos($event: KeyboardEvent){
    const element = $event.target as HTMLInputElement;

    if (element.value.length > 15) {
      this.colorApe = 'rojo';
    }
    else {
      this.colorApe = 'azul';
    }

    this.solicitud.apellidos = element.value;
  }
  saludolog(){
    console.log('Hola');
  }
}
