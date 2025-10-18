import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo-usuario',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="usuarioNombre" class="saludo-container">
      <span class="mensaje">{{ saludoHora }}, <strong>{{ usuarioNombre }}</strong> 👋</span>
    </div>
  `,
  styleUrls: ['./saludo-usuario.component.scss']
})
export class SaludoUsuarioComponent {
@Input() usuarioNombre: string | null = null;
  get saludoHora(): string {
    const hora = new Date().getHours();
    if (hora < 12) return 'Buenos días';
    if (hora < 18) return 'Buenas tardes';
    return 'Buenas noches';
  }
}