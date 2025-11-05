import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser'; //

const SERVICE_ID = 'mail.americasurinternaci'; // ej: 'mail.americasurinternacional...'
const TEMPLATE_ID = 'template_dmmy2oa'; // mail.americasurinternaci: 'cotizacion_asi'
const PUBLIC_KEY = 'XrCIEJ1S6jDto00DL'; // desde Account → API Keys

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  enviado = false;

  loading = false; // 👈 para deshabilitar el botón mientras envía
  // Opcional: listas para selects
  sectores = [
    'Industrial',
    'Comercial',
    'Servicios',
    'Minería',
    'Construcción',
  ];
  tiposDocumento = ['DNI', 'CE', 'Pasaporte'];

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario reactivo
    this.form = this.fb.group({
      empresa: ['', Validators.required],
      sector: ['', Validators.required],
      direccion: [''],
      ruc: [''],
      celular: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipoDoc: [''],
      email: ['', [Validators.required, Validators.email]],
      numDoc: [''],
      cargo: [''],
      comentarios: [''],
    });
  }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(): void {
    this.enviado = false;
    this.form.reset();
    console.log('[FORM] 🔄 Formulario reiniciado al abrir el componente.');
  }

  // Helper de errores usados en el template
  hasErr(field: string, type: string = 'required'): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.touched && ctrl.hasError(type));
  }

  // Envío del formulario
  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Mapeo de variables → deben coincidir con la plantilla EmailJS
    const v = this.form.value;
    const templateParams = {
      // variables que tu plantilla SÍ espera
      name: `${v.nombres || ''} ${v.apellidos || ''}`.trim(),
      email: v.email,
      title: v.empresa || 'Solicitud de cotización',
      time: new Date().toLocaleString(),

      // construimos un mensaje con todo lo del formulario
      message:
        `Empresa: ${v.empresa || '-'}\n` +
        `Sector: ${v.sector || '-'}\n` +
        `Nombres: ${v.nombres || '-'} ${v.apellidos || '-'}\n` +
        `Celular: ${v.celular || '-'}\n` +
        `Email: ${v.email || '-'}\n` +
        `Dirección: ${v.direccion || '-'}\n` +
        `RUC: ${v.ruc || '-'}\n` +
        `Tipo Doc: ${v.tipoDoc || '-'}\n` +
        `N° Doc: ${v.numDoc || '-'}\n` +
        `Cargo: ${v.cargo || '-'}\n` +
        `Comentarios: ${v.comentarios || '-'}`,
      // para que al responder vaya al correo del cliente
      reply_to: v.email,
    };

    try {
      this.loading = true;
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });
      this.enviado = true;
      this.form.reset();
    } catch (err) {
      console.error('Error enviando correo con EmailJS:', err);
      alert('No se pudo enviar el correo. Intenta nuevamente.');
    } finally {
      this.loading = false;
    }
  }
}
