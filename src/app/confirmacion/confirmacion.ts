import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/authService';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmacion',
  imports:[CommonModule, ReactiveFormsModule],
  templateUrl: './confirmacion.html',
  styleUrls: ['./confirmacion.scss']
})
export class ConfirmacionComponent {
  form: FormGroup;
  mensaje: string | null = null;
  error: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      codigo: ['', Validators.required]
    });
  }

  onConfirmar(): void {
    if (this.form.valid) {
      this.auth.confirmarCodigo(this.form.value).subscribe({
        next: (res) => {
          this.mensaje = res.mensaje;
          setTimeout(() => this.router.navigate(['/dashboard']), 2000);
        },
        error: (err) => {
          this.error = err.error?.mensaje || 'Error al confirmar. Intenta nuevamente.';
        }
      });
    }
  }
}
