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
export class SupplyComponent {
  imgLeft: string = 'assets/images/supply/Recurso 35.webp';
  img: string = 'assets/images/supply/Recurso 34.webp';
  txt: string = '';
}
