import { Component } from '@angular/core';
import { ContadoresComponent } from "../contadores/contadores.component";
import { BannersNosotrosComponent } from '../banners-nosotros/banners-nosotros.component';


@Component({
  selector: 'app-main-nosotros2',
  imports: [BannersNosotrosComponent, ContadoresComponent,],
  templateUrl: './main-nosotros2.component.html',
  styleUrl: './main-nosotros2.component.css'
})
export class MainNosotros2Component {

}
