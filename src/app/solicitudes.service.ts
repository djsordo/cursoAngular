import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor() { }

  getSolicitudes(){
    return [
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
      }
    ]
  }
}
