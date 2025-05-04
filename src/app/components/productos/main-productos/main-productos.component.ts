import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-productos',
  imports: [NgFor],
  templateUrl: './main-productos.component.html',
  styleUrl: './main-productos.component.css'
})
export class MainProductosComponent {

  iconos: string[] = [
    'images/productos/Recurso113.webp',
    'images/productos/Recurso110.webp',
    'images/productos/Recurso112.webp',
  ];

  productos: string[] = [
    'Equipos perforación en superficie multipropósito',
    'Equipos de perforación exploratoria',
    'Equipos de Pilotaje',
    'Perforadoras de orugas para micropilotes',
    'Equipos de muro pantalla',
    'Equipos de anclaje e inyección de cemento',
    'Jet grouting',
    'Soluciones de consolidación de túneles',
    'Compresore industriales',
    'Compresores estacionarios',
    'Compresores heli portables',
    'Compresores portátiles',
    'Compresores libres de aceite',
    'Compresoras y piezas OEM',
    'Booster de nitrógeno comprimido',
  ];


}
