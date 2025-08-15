import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

type Slide = {
  image: string;
  imageApp: string;
  title1?: string;
  title2?: string;
  title3?: string;
  description?: string;
  alt?: string;
};

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'], // 👈 plural
})
export class SliderComponent implements OnInit, OnDestroy {
  isMobileWidth(): boolean {
    return window.innerWidth <= 768; // puedes ajustar el breakpoint
  }

  // --- DATA ---
  slides: Slide[] = [
    {
      image: 'assets/images/header/1-casagrande.png',
      imageApp: 'assets/images/header/1-casagrandeapp.webp',
      title1: 'AMÉRICA',
      title2: 'SUR',
      title3: 'INTERNACIONAL',
      description:
        'Suministramos equipos, herramientas y compuestos para perforación desde 1996. Nuestros clientes: Minería, Exploración, Construcción y Pozos de Agua.',
    },
    {
      image: 'assets/images/header/2-nca.png',
      imageApp: 'assets/images/header/2-ncaapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
    {
      image: 'assets/images/header/3-progradex.png',
      imageApp: 'assets/images/header/3-progradexapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
    {
      image: 'assets/images/header/4-sreps.png',
      imageApp: 'assets/images/header/4-srepsapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
    {
      image: 'assets/images/header/5-harlsan.webp',
      imageApp: 'assets/images/header/5-harlsanapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
    {
      image: 'assets/images/header/6-cme.png',
      imageApp: 'assets/images/header/6-cmeapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
    {
      image: 'assets/images/header/7-hd.png',
      imageApp: 'assets/images/header/7-hdapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
    {
      image: 'assets/images/header/8-eurodrill.png',
      imageApp: 'assets/images/header/8-eurodrillapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
    {
      image: 'assets/images/header/9-sundril.png',
      imageApp: 'assets/images/header/9-sundrilapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
    {
      image: 'assets/images/header/10-matrix.png',
      imageApp: 'assets/images/header/10-matrixapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
    {
      image: 'assets/images/header/11-bestolife.png',
      imageApp: 'assets/images/header/11-bestolifeapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
    {
      image: 'assets/images/header/12-mudlogic.png',
      imageApp: 'assets/images/header/12-mudlogicapp.webp',
      title1: 'EXPLORACIÓN',
      title2: 'Y',
      title3: 'PERFORACIÓN',
      description:
        'Soluciones para proyectos mineros y de agua. Equipamiento de calidad mundial.',
    },
  ];

  // --- CONFIGURACIÓN ---
  autoplay = true;
  intervalMs = 4500;
  pauseOnHover = true;

  // --- ESTADO ---
  currentIndex = 0;

  // --- INTERNOS ---
  private timer: any = null;
  private startX = 0;
  private deltaX = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Ciclo de vida
  ngOnInit(): void {
    if (this.autoplay && isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  // Controles
  next(): void {
    if (!this.slides.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.restartTimer();
  }

  prev(): void {
    if (!this.slides.length) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.restartTimer();
  }

  goTo(i: number): void {
    if (i < 0 || i >= this.slides.length) return;
    this.currentIndex = i;
    this.restartTimer();
  }

  // Autoplay
  play(): void {
    if (
      this.autoplay &&
      this.pauseOnHover &&
      isPlatformBrowser(this.platformId)
    ) {
      this.startTimer();
    }
  }

  pause(): void {
    if (this.pauseOnHover) {
      this.clearTimer();
    }
  }

  private startTimer(): void {
    this.clearTimer();
    if (this.slides.length > 1) {
      this.timer = setInterval(() => this.next(), this.intervalMs);
    }
  }

  private clearTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private restartTimer(): void {
    if (this.autoplay && isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  // Gestos táctiles
  onTouchStart(ev: TouchEvent): void {
    this.startX = ev.touches[0].clientX;
    this.deltaX = 0;
    this.pause();
  }

  onTouchMove(ev: TouchEvent): void {
    this.deltaX = ev.touches[0].clientX - this.startX;
  }

  onTouchEnd(): void {
    const threshold = 40; // px
    if (Math.abs(this.deltaX) > threshold) {
      this.deltaX < 0 ? this.next() : this.prev();
    }
    this.play();
    this.startX = 0;
    this.deltaX = 0;
  }
}
