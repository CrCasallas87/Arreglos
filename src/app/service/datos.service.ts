import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detalles } from '../Interface/detalles.interface';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  public menu: any = [
    {
      titulo: 'starwars',
      icono: 'metismenu-icon pe-7s-rocket',
      subtitulo: 'Datos Starwars',
      url: 'starwars'
    },
    {
      titulo: 'Nasa',
      icono: 'metismenu-icon pe-7s-star',
      subtitulo: 'Noticia',
      url: '/nasa'
    }
  ];
  //https://api.nasa.gov/planetary/apod?api_key=pxkLb9kTM4jRA6HG7nGZaxfh0MDamYzB60MD4jET
  url: string = 'https://api.nasa.gov/planetary/apod?api_key=';
  apikey: string = 'pxkLb9kTM4jRA6HG7nGZaxfh0MDamYzB60MD4jET';

  detalleP:any = [];

  constructor(public http: HttpClient) { }
  //https://swapi.dev/api/people/
  //https://www.swapi.tech/api/people/
  datosStarWars() {
    return this.http.get<any>('https://swapi.dev/api/people/')
  }

  cargarP(i: any) {
    return this.http.get<Detalles>(`https://swapi.dev/api/people/${i}/`)
    .pipe(
      map( resp => {
        return resp;
      })
    )    
  }
  datosNasa() {
    return this.http.get<any>(`${this.url}${this.apikey}`);
  }

  

}
