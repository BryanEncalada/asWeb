import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgRigthComponent } from "../animation/img-rigth/img-rigth.component";
import { ImgLefComponent } from "../animation/img-lef/img-lef.component";

@Component({
  selector: 'app-supply',
  standalone: true,
  imports: [CommonModule, ImgRigthComponent, ImgLefComponent],
  templateUrl: './supply.component.html',
  styleUrl: './supply.component.css'
})
export class SupplyComponent {
  isVisible = false;
  isVisibleRight = false;

  imgLeft: string = "assets/images/supply/Recurso 35.webp";
  img: string = "assets/images/supply/Recurso 34.webp";
  txt: string = "";

}
