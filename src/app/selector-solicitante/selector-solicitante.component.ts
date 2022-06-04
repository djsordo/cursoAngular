import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector-solicitante',
  template: `
      <td>{{sol.nombre}}</td>
      <td>{{sol.apellidos}}</td>
      <td>{{sol.nacimiento | date: 'dd/MM/yyyy'}}</td>
      <td><button (click)="borrar(sol)">Eliminar</button></td>
  `,
  styleUrls: ['./selector-solicitante.component.css']
})
export class SelectorSolicitanteComponent implements OnInit {
  @Input()
    sol:any;

  @Output()
    solicitudBorrada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  borrar(solicitud:any){
    this.solicitudBorrada.emit(solicitud)
  }
}
