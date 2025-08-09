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
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    },
    {
      image: 'assets/images/empresa/harlsan.webp',
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    },
    {
      image: 'assets/images/empresa/eurodrill.webp',
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    },
    {
      image: 'assets/images/empresa/hd.webp',
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    }
  ];

  partnersRight = [
    {
      image: 'assets/images/empresa/casagrande.webp',
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    },
    {
      image: 'assets/images/empresa/sundril.webp',
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    },
    {
      image: 'assets/images/empresa/mudlogic.webp',
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    },
    {
      image: 'assets/images/empresa/cme.webp',
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    },
    {
      image: 'assets/images/empresa/bestolife.webp',
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    },
    {
      image: 'assets/images/empresa/matrix.webp',
      description: 'Soluciones innovadoras de aire comprimido y nitrógeno (Compresores y Boosters) para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral y exploración subterránea; así como aplicaciones de gas y petróleo.'
    }
  ];




}
