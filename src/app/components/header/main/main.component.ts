import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { PortalComponent } from '../portal/portal.component';

@Component({
  selector: 'app-main',
  imports: [MenuComponent, PortalComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
