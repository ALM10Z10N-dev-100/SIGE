import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CampoFormulario } from './login.date';
import { AuthService } from '../services/authService';
import { Router } from '@angular/router';

import { AuthVisualService } from '../services/auth-visual.service'; // ✅ ruta corregida


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  mensajeError: string | null = null;
  mensajeExito: string | null = null;
  rolElegido: 'alumno' | 'maestro' | null = null;
  modo: 'login' | 'registro' = 'registro';
  confirmationResult: any;
  esperandoCodigo = false;

  camposRegistro: CampoFormulario[] = [
    { nombre: 'nombre', tipo: 'text', placeholder: 'Nombre(s)', requerido: true },
    { nombre: 'apellidoPaterno', tipo: 'text', placeholder: 'Apellido Paterno', requerido: true },
    { nombre: 'apellidoMaterno', tipo: 'text', placeholder: 'Apellido Materno', requerido: true },
    { nombre: 'telefono', tipo: 'tel', placeholder: 'Teléfono (10 dígitos)', requerido: true }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private authVisual: AuthVisualService,
    private router: Router
  ) {
    this.form = this.fb.group({ rol: ['', Validators.required] });
    this.generarFormulario();
  }

  generarFormulario(): void {
    this.camposRegistro.forEach(campo => {
      const validaciones = campo.requerido ? [Validators.required] : [];
      if (campo.validaciones) validaciones.push(...campo.validaciones);
      this.form.addControl(campo.nombre, this.fb.control('', validaciones));
    });

    this.form.addControl('codigoVerificacion', this.fb.control('', Validators.required));
  }

  seleccionarRol(rol: 'alumno' | 'maestro'): void {
    this.rolElegido = rol;
    this.form.get('rol')?.setValue(rol);
  }

  alternarModo(): void {
    this.modo = this.modo === 'login' ? 'registro' : 'login';
    this.mensajeError = null;
    this.mensajeExito = null;
    this.esperandoCodigo = false;
    this.form.get('codigoVerificacion')?.reset();
  }

  enviarCodigo(): void {
    const telefono = this.form.get('telefono')?.value;

    if (!telefono || !/^\d{10}$/.test(telefono)) {
      this.mensajeError = 'Por favor ingresa un número válido de 10 dígitos.';
      return;
    }

    const recaptchaElement = document.getElementById('recaptcha-container');
    if (!recaptchaElement) {
      this.mensajeError = 'No se pudo inicializar el verificador. Intenta de nuevo.';
      return;
    }

    try {
      this.authVisual.crearRecaptcha('recaptcha-container');
      this.authVisual.enviarCodigo(telefono)
        .then((result: any) => {
          this.confirmationResult = result;
          this.esperandoCodigo = true;
          this.mensajeExito = '📱 Código enviado. Ingresa el código para confirmar tu cuenta.';
          this.mensajeError = null;
        })
        .catch((error: unknown) => {
          console.error('Error al enviar código:', error);
          this.mensajeError = 'No se pudo enviar el código. Verifica el número.';
          this.mensajeExito = null;
        });
    } catch (error) {
      this.mensajeError = 'Error al inicializar el verificador.';
    }
  }

  confirmarCodigo(): void {
    if (!this.confirmationResult) {
      this.mensajeError = 'Primero debes solicitar el código.';
      return;
    }

    const codigo = this.form.get('codigoVerificacion')?.value;

    this.authVisual.confirmarCodigo(codigo, this.confirmationResult)
      .then((result: any) => {
        const user = result.user;
        const datos = {
  uid: user.uid,
  telefono: user.phoneNumber.replace('+52', ''), // opcional: quitar prefijo
  nombre: this.form.get('nombre')?.value,
  apellidoPaterno: this.form.get('apellidoPaterno')?.value,
  apellidoMaterno: this.form.get('apellidoMaterno')?.value,
  rol: this.rolElegido
};


        const accion = this.modo === 'login'
          ? this.authService.login(datos)
          : this.authService.registro(datos);

        accion.subscribe({
          next: (usuario) => {
            this.mensajeError = null;
            this.mensajeExito = `✅ Código confirmado. ${
              this.rolElegido === 'alumno' ? '🎓 Bienvenido alumno' : '📚 Bienvenido maestro'
            } ${usuario.nombre}`;
            this.router.navigate(['/confirmacion']);
          },
          error: (err) => {
            console.error('Error de autenticación:', err);
            this.mensajeError = 'No pudimos validar tus datos. Intenta más tarde.';
            this.mensajeExito = null;
          }
        });
      })
      .catch((error: unknown) => {
        console.error('Código incorrecto:', error);
        this.mensajeError = '❌ Código incorrecto. Intenta de nuevo.';
        this.mensajeExito = null;
      });
  }
}
