import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

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
