import { SolicitudModule } from './solicitud/solicitud.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroComponent } from './centro/centro.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { SelectorSolicitanteComponent } from './selector-solicitante/selector-solicitante.component';
import { CentrosComponent } from './centros/centros.component';

@NgModule({
  declarations: [
    AppComponent,
    CentroComponent,
    CentrosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SolicitudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
