
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
    { color: 'azul', imagen: 'assets/images/maquinarias/Recurso_10Maq.webp' },
    { color: 'celeste', imagen: 'assets/images/maquinarias/Recurso_10Maq.webp' },
    { color: 'negro', imagen: 'assets/images/maquinarias/Recurso_10Maq.webp' },
    { color: 'mostaza', imagen: 'assets/images/maquinarias/Recurso_10Maq.webp' },
    { color: 'rojo', imagen: 'assets/images/maquinarias/Recurso_10Maq.webp' } // nueva franja
  ];


  toggleFranja(index: number) {
    this.activeFranjaIndex = this.activeFranjaIndex === index ? null : index;
  }


}
