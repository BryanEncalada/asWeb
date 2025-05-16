import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dsc-empresa-cuadros',
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './dsc-empresa-cuadros.component.html',
  styleUrl: './dsc-empresa-cuadros.component.css'
})
export class DscEmpresaCuadrosComponent {

  empresas = [
    {
      nombre: 'ProgradeX',
      descripcion: 'Soluciones de muestreo de perforación. Muestras más representativas de manera más eficiente y rentable, garantizando la protección de los operadores y medio ambiente.',
      logo: 'assets/images/nosotros2/cuadros/PROGRADEX.webp', // si tienes logos, pon las rutas aquí
      centro: false,
    },
    {
      nombre: 'NCA',
      descripcion: 'Innovadoras soluciones de aire comprimido y nitrógeno para perforación sísmica terrestre, estudios sísmicos marinos, exploración mineral, y exploración subterránea, aplicaciones de gas y petróleo.',
      logo: 'assets/images/nosotros2/cuadros/NCA.webp',
      centro: true
    },
    {
      nombre: 'Casagrande',
      descripcion: 'Investigación e innovación continua, desarrollando equipos orientados a las necesidades de los clientes: de pilotaje, de anclaje e inyección de cemento, de muro pantalla, perforadoras de orugas para micropilotes y opciones personalizables en soluciones de consolidación de túneles.',
      logo: 'assets/images/nosotros2/cuadros/CASAGRANDE.webp',
      centro: true
    },
    {
      nombre: 'SUNDRIL',
      descripcion: '67 años ofreciendo al mundo barras de Perforación diamantina, core barrels y muchas otras herramientas de perforación diamantina.',
      logo: 'assets/images/nosotros2/cuadros/SUNDRIL.webp',
      centro: false
    }
  ];

}
