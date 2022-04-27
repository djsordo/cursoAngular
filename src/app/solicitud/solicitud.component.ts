import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor() {
    setInterval(() => {
      this.nombre = '' + Math.random();
    }, 2000)
  }

  ngOnInit(): void {
  }

  nombre = "Angelillo";
}
