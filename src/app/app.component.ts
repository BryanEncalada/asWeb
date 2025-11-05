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
import { FormComponent } from './components/form/form.component';

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
    FormComponent,
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

  closeModal(): void {
    console.log('[APP] closeModal()');
    const modal = document.getElementById('contactoModal');
    if (!modal) {
      console.log('[APP] ❌ No se encontró #contactoModal');
      return;
    }
    modal.style.display = 'none';
    console.log('[APP] ✅ Modal cerrado (display:none)');
  }
  isModalOpen = false;

  openContacto(): void {
    console.log('[MENU] Click en CONTACTO');

    const modal = document.getElementById('contactoModal');
    if (!modal) {
      console.log(
        '[MENU] ❌ No se encontró el elemento #contactoModal en el DOM'
      );
      return;
    }

    modal.style.display = 'flex';
    console.log('[MENU] ✅ Modal abierto (display:flex)');
  }
}
