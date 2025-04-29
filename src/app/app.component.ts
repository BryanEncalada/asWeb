import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/header/main/main.component';
import { MainFooterComponent } from './components/footer/main-footer/main-footer.component';

import { BannerComponent } from './components/banner/banner.component';

import { MainNosotros2Component } from './components/nosotros2/main-nosotros2/main-nosotros2.component';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { MainMaquinariasComponent } from './components/maquinarias/main-maquinarias/main-maquinarias.component';
=======
import { SupplyComponent } from './components/supply/supply.component';
>>>>>>> Stashed changes
=======
import { SupplyComponent } from './components/supply/supply.component';
>>>>>>> Stashed changes



@Component({
  selector: 'app-root',

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  imports: [RouterOutlet, MainComponent, MainFooterComponent, MainNosotros2Component,BannerComponent, MainMaquinariasComponent],
=======
  imports: [RouterOutlet, MainComponent, MainFooterComponent, MainNosotros2Component,BannerComponent, SupplyComponent],
>>>>>>> Stashed changes
=======
  imports: [RouterOutlet, MainComponent, MainFooterComponent, MainNosotros2Component,BannerComponent, SupplyComponent],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AS';
}
