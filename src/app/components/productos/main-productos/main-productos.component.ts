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
    'assets/images/productos/Recurso113.webp',
    'assets/images/productos/Recurso110.webp',
    'assets/images/productos/Recurso112.webp',
  ];


  productos: string[] = [
    "Equipos de pilotaje",
    "Perforadoras sobre orugas para micropilotes",
    "Equipos para muro pantalla",
    "Equipos de anclaje e inyección de cemento",
    "Jet Grouting",
    "Soluciones de consolidación de túneles",
    "Compresores industriales",
    "Compresores estacionarios",
    "Compresores heliportables",
    "Compresores portátiles",
    "Compresores libres de aceite",
    "Compresores y piezas OEM",
    "Compresores de tornillo rotativo para gas natural",
    "Booster de nitrógeno comprimido",
    "Plantas generadoras de aire",
    "Muestreadores de rango medio",
    "Muestreadores PGX premium",
    "Cabezales Serie-X",
    "Cabezales de rotación vibratorios",
    "Cabezales de rotación para perforación diamantina",
    "Sistema de perforación de doble cabezal",
    "Cabezales de rotación eléctricos (E-Heads)",
    "Cabezales de rotación para perforadoras de pilotes",
    "Afiladores para insertos de carburo de tungsteno estacionarios",
    "Afiladores para insertos de carburo de tungsteno portátiles",
    "Copas de afilado para insertos de carburo de tungsteno",
    "Extractores de casing",
    "Sistema de perforación overburden para terrenos sin consolidar",
    "Barras de circulación inversa",
    "Sub estabilizador en espiral RC",
    "Martillos y brocas RC",
    "Accesorios para circulación inversa",
    "Martillos convencionales DTH de gran diámetro",
    "Brocas convencionales DTH de gran diámetro",
    "Hole openers DTH",
    "Tuberías de diamantina y accesorios",
    "Compuestos para protección de conexiones roscadas",
    "Aceites lubricantes para martillos de fondo"
  ];




}
