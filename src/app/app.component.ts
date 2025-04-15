import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/header/main/main.component';
import { MainFooterComponent } from './components/footer/main-footer/main-footer.component';
import { BannerComponent } from './components/banner/banner.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent, MainFooterComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AS';
}
