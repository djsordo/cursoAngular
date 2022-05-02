import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {
  centros = [{nombre: "Fernando de Rojas"}, {nombre: "Agustinas"}];
  centrosFiltrados: any
  centroSeleccionado = {nombre: ""}

  constructor() {

  }

  ngOnInit(): void {
  }

  centro($event: any){
    this.centrosFiltrados = this.centros.filter(centro => centro.nombre.includes($event.target.value))
    console.log(this.centrosFiltrados)
  }

  seleccionarCentro(centro: any){
    this.centroSeleccionado.nombre = centro.nombre
    console.log("Centro seleccionado: " + this.centroSeleccionado.nombre)
  }
}
