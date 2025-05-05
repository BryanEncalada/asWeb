
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-main-maquinarias',
  imports: [NgFor, NgIf, NgStyle, NgClass],
  templateUrl: './main-maquinarias.component.html',
  styleUrl: './main-maquinarias.component.css'
})
export class MainMaquinariasComponent {

  activeFranjaIndex: number | null = null;

  franjas = [
    {
      color: 'azul',
      imagen: 'assets/images/maquinarias/Capacitacion/Recurso57.webp',
      tituloimg: 'assets/images/maquinarias/Capacitacion/Recurso58.webp',
      textimg: 'assets/images/maquinarias/Capacitacion/Recurso55.webp',
      booMostrtext: false,
      booMostrIcoSup: true,
      style: {
        'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0)), url('../../assets/images/maquinarias/Capacitacion/Recurso60.webp')`,
      },
    },
    {
      color: 'celeste',
      imagen: 'assets/images/maquinarias/Diagnostico/Recurso43.webp',
      tituloimg: 'assets/images/maquinarias/Diagnostico/Recurso46.webp',
      textimg: 'assets/images/maquinarias/Diagnostico/Recurso44.webp',
      booMostrtext: false,
      booMostrIcoSup: true,
      style: {
        'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0)), url('../../assets/images/maquinarias/Diagnostico/Recurso48.webp')`,
      }
    },
    {
      color: 'negro',
      imagen: 'assets/images/maquinarias/mantenimientoPre/Recurso31.webp',
      tituloimg: 'assets/images/maquinarias/mantenimientoPre/Recurso34.webp',
      textimg: 'assets/images/maquinarias/mantenimientoPre/Recurso32.webp',
      booMostrtext: false,
      booMostrIcoSup: true,
      style: {
        'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0)), url('../../assets/images/maquinarias/mantenimientoPre/Recurso36.webp')`,
      }
    },
    {
      color: 'mostaza',
      imagen: 'assets/images/maquinarias/mantenimiento/Recurso67.webp',
      tituloimg: 'assets/images/maquinarias/mantenimiento/Recurso70.webp',
      textimg: 'assets/images/maquinarias/mantenimiento/Recurso68.webp',
      booMostrtext: false,
      booMostrIcoSup: true,
      style: {
        'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0)), url('../../assets/images/maquinarias/mantenimiento/Recurso72.webp')`,
      }
    },
    {
      color: 'rojo',
      imagen: 'assets/images/maquinarias/Arranque/Recurso81.webp',
      tituloimg: 'assets/images/maquinarias/Arranque/Recurso82.webp',
      textimg: 'assets/images/maquinarias/Arranque/Recurso79.webp',
      booMostrtext: true,
      booMostrIcoSup: true,
      style: {
        'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0)), url('../../assets/images/maquinarias/Arranque/Recurso84.webp')`,
      }
    } // nueva franja
  ];


  toggleFranja(index: number) {

    this.activeFranjaIndex = this.activeFranjaIndex === index ? null : index;

    this.franjas.forEach( (element, i) => {
      this.franjas[i].booMostrIcoSup = true;
    });
    this.franjas[index].booMostrIcoSup = this.activeFranjaIndex === index ? false : true; 

  }


}
