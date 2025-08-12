import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';
import { ImgLefComponent } from '../animation/img-lef/img-lef.component';
import { ImgRigthComponent } from '../animation/img-rigth/img-rigth.component';

@Component({
  selector: 'app-supply',
  standalone: true,
  imports: [CommonModule, ImgLefComponent, ImgRigthComponent],
  templateUrl: './supply.component.html',
  styleUrl: './supply.component.css',

  animations: [
    trigger('slideInFromLeft', [
      state('hidden', style({ transform: 'translateX(-100%)' })),
      state('visible', style({ transform: 'translateX(0)' })),
      transition('hidden => visible', animate('2000ms ease-out')),
    ]),
    trigger('slideInFromRight', [
      state('hidden', style({ transform: 'translateX(100%)' })),
      state('visible', style({ transform: 'translateX(0)' })),
      transition('hidden => visible', animate('2000ms ease-out')),
    ]),
  ],
})
export class SupplyComponent implements AfterViewInit {
  isVisible = false;
  isVisibleRight = false;

  imgLeft: string = 'assets/images/supply/Recurso 35.webp';
  img: string = 'assets/images/supply/Recurso 34.webp';
  txt: string = '';

  @ViewChild('observedRightImg', { static: false })
  observedRightImgRef!: ElementRef;

  @ViewChild('observedImg', { static: false }) observedImgRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Observer para imagen izquierda
      if (this.observedImgRef) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              console.log('Visible 1');
              this.isVisible = true;
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.3 }
        );

        setTimeout(() => {
          observer.observe(this.observedImgRef.nativeElement);
        }, 100);
      }

      // Observer para imagen derecha
      if (this.observedRightImgRef) {
        const observerRight = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              console.log('Visible right');
              this.isVisibleRight = true;
              observerRight.unobserve(entry.target);
            }
          },
          { threshold: 0.3 }
        );

        setTimeout(() => {
          observerRight.observe(this.observedRightImgRef.nativeElement);
        }, 100);
      }
    }
  }
}
