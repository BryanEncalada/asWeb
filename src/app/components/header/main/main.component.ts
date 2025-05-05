import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { PortalComponent } from '../portal/portal.component';
import { FooterHeaderComponent } from '../footer-header/footer-header.component';

@Component({
  selector: 'app-main',
  imports: [MenuComponent, PortalComponent, FooterHeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
