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
      transition('hidden => visible', animate('2000ms ease-out')),
    ]),
    trigger('slideInFromRight', [
      state('hidden', style({ transform: 'translateX(100%)', opacity: 0 })), // ← desde la derecha
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', animate('2000ms ease-out')),
    ]),
  ],
})
export class SupplyComponent implements AfterViewInit {
  isVisible = false;
  isVisibleRight = false;

  @ViewChild('observedRightImg', { static: false })
  observedRightImgRef!: ElementRef;

  @ViewChild('observedImg', { static: false }) observedImgRef!: ElementRef;

  ngAfterViewInit(): void {
    console.log('ViewChild ref:', this.observedImgRef);
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
