import { Component } from '@angular/core';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent  {

  arregloNasa: any = [];

  constructor(public datosService: DatosService) {
    this.cargarDatosNasa();
   }

  cargarDatosNasa() {
    this.datosService.datosNasa().subscribe( resp => {
      this.arregloNasa = resp;
      console.log(resp);
    })
  }

  

}
