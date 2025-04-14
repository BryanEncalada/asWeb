import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-main-footer',
  imports: [FooterComponent,BannerComponent],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.css'
})
export class MainFooterComponent {

}
