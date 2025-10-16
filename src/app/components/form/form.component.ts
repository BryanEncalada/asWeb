import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  // listas UI
  sectores = ['Tecnología', 'Industrial', 'Retail', 'Salud', 'Educación'];
  tiposDocumento = ['DNI', 'CE', 'Pasaporte'];

  // 1) evita TS2729 usando inject()
  private fb = inject(FormBuilder);

  // 2) crea el form UNA SOLA VEZ con TODA la forma
  form = this.fb.nonNullable.group({
    empresa: ['', Validators.required],
    sector: ['', Validators.required],
    direccion: [''],
    ruc: [''],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    celular: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    tipoDoc: [''],
    numDoc: [''],
    cargo: [''],
    comentarios: [''],
  });

  enviado = false;

  // ya no necesitas constructor ni ngOnInit para (re)crear el form

  submit(): void {
    this.enviado = true;
    if (this.form.invalid) return;
    console.log(this.form.value);
    this.form.reset();
    this.enviado = false;
    alert('¡Formulario enviado!');
  }

  hasErr(campo: string, error?: string) {
    const ctrl = this.form.get(campo);
    if (!ctrl) return false;
    return (
      (ctrl.touched || this.enviado) &&
      (error ? ctrl.hasError(error) : ctrl.invalid)
    );
  }
}
