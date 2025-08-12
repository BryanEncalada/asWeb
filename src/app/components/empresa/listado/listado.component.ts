import { CommonModule, NgFor } from '@angular/common';
import {  Component} from '@angular/core';
import { ImgLefComponent } from "../../animation/img-lef/img-lef.component";
import { ImgRigthComponent } from "../../animation/img-rigth/img-rigth.component";


@Component({
  selector: 'app-listado',
  imports: [NgFor, CommonModule, ImgLefComponent, ImgRigthComponent],
  standalone: true,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  partnersLeft = [
    {
      image: 'assets/images/empresa/progradex.webp',
      description: 'Ciclones de muestreo y colectores de polvo. Muestras más representativas de manera más eficiente y rentable, garantizando la protección de los operadores y medio ambiente.'
    },
    {
      image: 'assets/images/empresa/nca.webp',
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    },
    {
      image: 'assets/images/empresa/sreps.webp',
      description: 'Martillos y Brocas de Circulación Inversa y DTH utilizados específicamente en los sectores de Exploración Minera y Control de Leyes de Minerales.'
    },
    {
      image: 'assets/images/empresa/harlsan.webp',
      description: 'Barras de Perforación de Circulación Inversa, Sub Estabilizadores en Espiral y accesorios RC de primera calidad fabricados con materiales premium.'
    },
    {
      image: 'assets/images/empresa/eurodrill.webp',
      description: 'Cabezales Serie-X, cabezales de rotación vibratorios, cabezales de rotación para perforación diamantina, cabezales de rotación eléctricos (E-Heads), cabezales de rotación para perforadoras de pilotes y sistema de perforación de doble cabezal.'
    },
    {
      image: 'assets/images/empresa/hd.webp',
      description: 'Diseño, ingeniería y fabricación de equipos y herramientas para la industria de la construcción, minería, pozos de agua y exploración (Extractores de casing y sistema de perforación overburden para terrenos sin consolidar).'
    }
  ];

  partnersRight = [
    {
      image: 'assets/images/empresa/casagrande.webp',
      description: 'Piloteras, perforadoras universales, perforadoras sobre orugas, máquinas para muro diafragma y jet grouting, tuneladoras y herramientas de perforación para la industria de construcción.'
    },
    {
      image: 'assets/images/empresa/sundril.webp',
      description: 'Barras de perforación diamantina y core barrels con las mejores materias prima, respaldados por estrictos procedimientos de inspección de calidad.'
    },
    {
      image: 'assets/images/empresa/mudlogic.webp',
      description: 'Fluidos de lubricación de calidad superior para martillos de fondo. La fábrica cuenta con un activo programa de investigación y desarrollo, lo que les ha permitido posicionarse en el mundo con una amplia gama de productos.'
    },
    {
      image: 'assets/images/empresa/cme.webp',
      description: 'Robots, pistolas manuales y copas diamantadas para el afilado de insertos de tungsteno. Esta fábrica ha implementado innumerables sistemas de rectificado para operaciones de perforación de roca.'
    },
    {
      image: 'assets/images/empresa/bestolife.webp',
      description: 'Compuestos premium para reducir el desgaste de las roscas en la industria de perforación (minería, petróleo y gas, construcción). Pueden sellar, lubricar y proteger para mantener sus propiedades en condiciones extremas de temperatura. Son productos amigables con el medio ambiente.'
    },
    {
      image: 'assets/images/empresa/matrix.webp',
      description: 'Fabricación de Barras RC, convencionales, swivels, adaptadores y accesorios. Se caracterizan por tener acero certificado, soldadura en plasma y por fricción, así como tratamiento térmico especializado.'
    }
  ];




}
