import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/header/main/main.component';
import { MainFooterComponent } from './components/footer/main-footer/main-footer.component';
import { MainNosotros2Component } from './components/nosotros2/main-nosotros2/main-nosotros2.component';
import { MainMaquinariasComponent } from './components/maquinarias/main-maquinarias/main-maquinarias.component';
import { SupplyComponent } from './components/supply/supply.component';
import { MainProductosComponent } from './components/productos/main-productos/main-productos.component';
import { ListadoComponent } from './components/empresa/listado/listado.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',

  imports: [
    RouterOutlet,
    MainComponent,
    MainFooterComponent,
    MainNosotros2Component,
    MainMaquinariasComponent,
    MainProductosComponent,
    SupplyComponent,
    ListadoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle(
      'América Sur Internacional – Plataformas de Perforación y Equipos Auxiliares'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Suministramos plataformas de perforación, equipos auxiliares, herramientas, compuestos y aceites para martillos neumáticos desde 1996.',
    });
  }
}
