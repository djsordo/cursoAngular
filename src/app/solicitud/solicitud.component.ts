import { SolicitudesService } from './../solicitudes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitudes: any

  constructor(private solicitudesService: SolicitudesService) {
    this.solicitudes = solicitudesService.getSolicitudes()
   }

  ngOnInit(): void {
  }

  solicitud = {
    nombre: "Ángel",
    apellidos: "Vitores Macón"
  }

  centro = 'Centro 1';

  colorNombre = 'azul';
  colorApe = 'azul';


/*   solicitudes = [
    {
      nombre: "Ángel Juan",
      apellidos: "Vitores Macón",
      nacimiento: new Date(1972, 4, 23)
    },
    {
      nombre: "Antonio",
      apellidos: "Pérez Gómez",
      nacimiento: new Date(1984, 11, 24)
    },
    {
      nombre: "Cecilia",
      apellidos: "de la Orden Pi",
      nacimiento: new Date(1991, 1, 1)
    },
  ] */

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

  borrarSolicitud(solicitud:any){
    console.log("La solicitud de " + solicitud.nombre + " " + solicitud.apellidos + " ha sido borrada")
  }

}
