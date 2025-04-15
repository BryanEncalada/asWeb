import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/header/main/main.component';
import { MainFooterComponent } from './components/footer/main-footer/main-footer.component';
import { MainNosotros2Component } from './components/nosotros2/main-nosotros2/main-nosotros2.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent, MainFooterComponent, MainNosotros2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AS';
}
