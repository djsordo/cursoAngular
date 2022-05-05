import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private httpClient: HttpClient) { }

  getSolicitudes(){
    const accessToken = 'o8vlfcqXWB8344KCv5LruaXU9BKAmWWh0JRUbuNdgbA';

    return this.httpClient.get(`https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`).toPromise();

/*     return [
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
    ] */
  }
}
