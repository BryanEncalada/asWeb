import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  state,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-supply',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supply.component.html',
  styleUrl: './supply.component.css',
  animations: [
    trigger('slideInFromLeft', [
      state('hidden', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', animate('800ms ease-out')),
    ]),
  ],
})
export class SupplyComponent implements AfterViewInit {
  isVisible = false;

  @ViewChild('observedImg', { static: false }) observedImgRef!: ElementRef;

  ngAfterViewInit(): void {
    console.log('ViewChild ref:', this.observedImgRef);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Visible');
          this.isVisible = true;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    // 👇 Forzar una espera mínima
    setTimeout(() => {
      observer.observe(this.observedImgRef.nativeElement);
    }, 100);
  }
}
