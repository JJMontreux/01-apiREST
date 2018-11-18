import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Añadido
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1'; // <-- Añadido manualmente. Ojo, la ruta es distinta a la del import de app.module.ts

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios // <-- Variable para almacenar los datos obtenidos a través del método ObtenerDatos() ubicado en proveedor.ts

  constructor(public navCtrl: NavController,
              public proveedor:Proveedor1Provider) { // <-- Añadido manualmente
  }

  /* Añadido (comienzo) */
  ionViewDidLoad(){
   this.proveedor.ObtenerDatos()
   .subscribe(
     (data) => {this.usuarios = data;},
     (error) => {console.log(error);}
   )
  }
  /* Añadido (final) */

}
