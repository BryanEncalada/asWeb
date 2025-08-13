import {
  Component,
  ViewChild,
  Inject,
  PLATFORM_ID,
  ElementRef,
  AfterViewInit,
  Input,
  HostListener,
} from '@angular/core';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-img-lef',
  imports: [],
  templateUrl: './img-lef.component.html',
  styleUrl: './img-lef.component.css',
  animations: [
    trigger('slideInFromLeft', [
      state('hidden', style({ transform: 'translateX(30%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', animate('2000ms ease-out')),
    ]),
    trigger('sFromTop', [
      state('hidden', style({ transform: 'translateY(50px)', opacity: 0 })),
      state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('hidden => visible', animate('800ms ease-out')),
    ]),
  ],
})
export class ImgLefComponent implements AfterViewInit {
  isVisible = false;
  isDesktop = true;
  @ViewChild('observedImg', { static: false }) observedImgRef!: ElementRef;

  @Input() mensaje!: string;
  @Input() img!: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.checkScreenWidth();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Observer para imagen izquierda
      if (this.observedImgRef) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              console.log('Visible left');
              this.isVisible = true;
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.3 }
        );

        observer.observe(this.observedImgRef.nativeElement);
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    if (typeof window !== 'undefined') {
      this.isDesktop = window.innerWidth > 768;
    }
  }
}
