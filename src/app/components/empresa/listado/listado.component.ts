import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild, PLATFORM_ID, Inject, ViewChildren, QueryList, } from '@angular/core';
import { trigger, style, state, transition, animate, } from '@angular/animations';


@Component({
  selector: 'app-listado',
  imports: [NgFor, CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
  animations: [
    trigger('slideInFromBottom', [
      state('hidden', style({ opacity: 0, transform: 'translateY(50px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out'))
    ])
  ]
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
