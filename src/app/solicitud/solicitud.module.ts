import { SelectorSolicitanteComponent } from './../selector-solicitante/selector-solicitante.component';
import { SelectorCentroComponent } from './../selector-centro/selector-centro.component';
import { SolicitudComponent } from './solicitud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SolicitudComponent, SelectorCentroComponent, SelectorSolicitanteComponent],
  imports: [
    CommonModule,
  ]
})
export class SolicitudModule { }
