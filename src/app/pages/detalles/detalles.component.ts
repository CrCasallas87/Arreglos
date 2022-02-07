import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  detallesPersonaje: any = []; 

  constructor(public datosService: DatosService, private route:ActivatedRoute) {
    this.detalle();
   }

  detalle() {
    this.route.params.subscribe(parametros => {
      this.datosService.cargarP( parametros['i'])
      .subscribe(resp => {
        this.detallesPersonaje = resp;
        console.log(this.detallesPersonaje);
      })
    })
  }

  

}
