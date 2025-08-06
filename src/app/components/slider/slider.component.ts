import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  imports: [CarouselModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  customOptions = {
    loop: true, // 🔁 Repetir slides infinitamente
    autoplay: true, // ▶️ Activar autoplay
    autoplayTimeout: 4000, // ⏱️ Tiempo entre cada slide (en ms)
    autoplayHoverPause: false, // 🚫 No detener al pasar el mouse
    dots: true, // 🔘 Mostrar puntos
    nav: false, // ⬅️➡️ Ocultar flechas (puedes poner true si las quieres)
    items: 1, // 1 slide a la vez
  };

  slides = [
    {
      image: 'assets/images/header/Recurso_20.webp',
      title1: 'AMÉRICA',
      title2: 'SUR',
      title3: 'INTERNACIONAL',
      description:
        'Suministramos equipos, herramientas y compuestos para perforación desde 1996. Nuestros clientes: Minería, Exploración, Construcción y Pozos de Agua.',
    },
    {
      image: 'assets/images/header/Recurso_21.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
  ];
}
