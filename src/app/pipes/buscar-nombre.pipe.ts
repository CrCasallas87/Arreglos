import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarNombre'
})
export class BuscarNombrePipe implements PipeTransform {

  transform(value: any, args: any): any {
    const nombreP = []

    for(const recorrido of value) {
      if(recorrido.name.toLowerCase().indexOf( args.toLowerCase() ) > -1) {
        nombreP.push(recorrido);
      }
    }
    return nombreP;
  }
  // esta parte no funcionsa esta parte sigue sin funcionar
  // otra pocion de sin cambion comentario
  // otro comentario de prueba
  // este si puede ser el cambio de la  prueba final
  // este comentario se hizo en master


// comenteario hecho en disaeñador 1
}
