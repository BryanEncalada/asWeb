
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-main-maquinarias',
  imports: [NgFor, NgIf, NgStyle, NgClass],
  templateUrl: './main-maquinarias.component.html',
  styleUrl: './main-maquinarias.component.css'
})
export class MainMaquinariasComponent {

  activeFranjaIndex: number | null = null;
  activeFranjaStyle: { [key: string]: string } = {};
  activeFranjaBo: boolean = false;
  activeFranjaImg: string = '';
  activeFranjatituloimg: string = '';
  activeFranjabooMostrtext: boolean = false;
  activeFranjatextimg: string = '';
  activeFranjacontenidoFranja: { [key: string]: string } = {};

  franjas = [
    {
      color: 'azul',
      ColorFranja: {

      },
      imagen: 'assets/images/maquinarias/MAQ1/ICONO.webp',
      tituloimg: 'assets/images/maquinarias/MAQ1/TITULO.webp',
      textimg: 'assets/images/maquinarias/MAQ1/IMAGEN.webp',
      booMostrtext: false,
      booMostrIcoSup: true,
      styleFondo: {
        'background-image': `url('../../assets/images/maquinarias/MAQ1/fondo1.webp')`,
      },
      style: {
        'background-image': `url('../../assets/images/maquinarias/MAQ1/IMAGEN.webp')`,
      },
      contenidoFranja: { 'background-color': `#000C3F` },
    },
    {
      color: 'azul',
      ColorFranja: {

      },
      imagen: 'assets/images/maquinarias/MAQ2/ICONO.webp',
      tituloimg: 'assets/images/maquinarias/MAQ2/TITULO.webp',
      textimg: 'assets/images/maquinarias/MAQ2/IMAGEN.webp',
      booMostrtext: false,
      booMostrIcoSup: true,
      styleFondo: {
        'background-image': `url('../../assets/images/maquinarias/MAQ2/fondo2.webp')`,
      },
      style: {
        'background-image': `url('../../assets/images/maquinarias/MAQ2/IMAGEN.webp')`,
      },
      contenidoFranja: { 'background-color': `#35A8E0` },
    },
    {
      color: 'azul',
      ColorFranja: {

      },
      imagen: 'assets/images/maquinarias/MAQ3/ICONO.webp',
      tituloimg: 'assets/images/maquinarias/MAQ3/TITULO.webp',
      textimg: 'assets/images/maquinarias/MAQ3/IMAGEN.webp',
      booMostrtext: false,
      booMostrIcoSup: true,
      styleFondo: {
        'background-image': `url('../../assets/images/maquinarias/MAQ3/fondo3.webp')`,
      },
      style: {
        'background-image': `url('../../assets/images/maquinarias/MAQ3/IMAGEN.webp')`,
      },
      contenidoFranja: { 'background-color': `black` },
    }
    ,
    {
      color: 'azul',
      ColorFranja: {

      },
      imagen: 'assets/images/maquinarias/MAQ4/ICONO.webp',
      tituloimg: 'assets/images/maquinarias/MAQ4/TITULO.webp',
      textimg: 'assets/images/maquinarias/MAQ4/IMAGEN.webp',
      booMostrtext: false,
      booMostrIcoSup: true,
      styleFondo: {
        'background-image': `url('../../assets/images/maquinarias/MAQ4/fondo4.webp')`,
      },
      style: {
        'background-image': `url('../../assets/images/maquinarias/MAQ4/IMAGEN.webp')`,
      },
      contenidoFranja: { 'background-color': `#F2BA11` },
    },
    {
      color: 'azul',
      ColorFranja: {

      },
      imagen: 'assets/images/maquinarias/MAQ5/ICONO.webp',
      tituloimg: 'assets/images/maquinarias/MAQ5/TITULO.webp',
      textimg: 'assets/images/maquinarias/MAQ5/IMAGEN.webp',
      booMostrtext: false,
      booMostrIcoSup: true,
      styleFondo: {
        'background-image': `url('../../assets/images/maquinarias/MAQ5/fondo5.webp')`,
      },
      style: {
        'background-image': `url('../../assets/images/maquinarias/MAQ5/IMAGEN.webp')`,
      },
      contenidoFranja: { 'background-color': `#EAEAEA` },
    },
    {
      color: 'azul',
      ColorFranja: {

      },
      imagen: 'assets/images/maquinarias/MAQ6/icono.webp',
      tituloimg: 'assets/images/maquinarias/MAQ6/titulo.webp',
      textimg: 'assets/images/maquinarias/MAQ6/imagen.webp',
      booMostrtext: false,
      booMostrIcoSup: true,
      styleFondo: {
        'background-image': `url('../../assets/images/maquinarias/MAQ6/fondo6.webp')`,
      },
      style: {
        'background-image': `url('../../assets/images/maquinarias/MAQ6/imagen.webp')`,
      },
      contenidoFranja: { 'background-color': `#00A9A6` },
    }




    // nueva franja
  ];


  toggleFranja(index: number) {

    if(index == 0){
this.activeFranjaBo = true;
    }

    this.activeFranjaIndex = this.activeFranjaIndex === index ? null : index;

    this.franjas.forEach((element, i) => {
      this.franjas[i].booMostrIcoSup = false;
    });

    this.franjas[index].booMostrIcoSup = this.activeFranjaIndex === index ? false : true;

    if (this.activeFranjaIndex == null) {
      this.activeFranjaBo = false;

      this.franjas.forEach((element, i) => {
        this.franjas[i].booMostrIcoSup = true;
      });


    } else {

      console.log(this.franjas[index]);

      this.activeFranjaBo = true;
      this.activeFranjaStyle = this.franjas[index].style;
      this.activeFranjaImg = this.franjas[index].imagen;
      this.activeFranjatituloimg = this.franjas[index].tituloimg;
      this.activeFranjabooMostrtext = this.franjas[index].booMostrtext;
      this.activeFranjatextimg = this.franjas[index].textimg;
      this.activeFranjacontenidoFranja = this.franjas[index].contenidoFranja;

    }

  }


}
