import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-primaria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-primaria.html',
  styleUrls: ['./dashboard-primaria.scss']
})
export class DashboardPrimaria {
  alumnos: any[] = [];
  bimestres = ['Primero', 'Segundo', 'Tercero' , 'Cuarto', 'Quinto', 'Sexto'];

  constructor(private http: HttpClient) {
    this.cargarCalificaciones();
  }

  cargarCalificaciones() {
    this.http.get<any[]>('/api/calificacionesPrim').subscribe(data => {
      this.alumnos = data.map(a => ({
        ...a,
        mensaje: this.mensajePorPromedio(a.promedio)
      }));
    });
  }

  mensajePorPromedio(promedio: number): string {
    if (promedio >= 9) return '🌈 Excelente desempeño. ¡Sigue brillando!';
    if (promedio >= 8) return '🌟 Buen trabajo. Tu esfuerzo se nota.';
    if (promedio >= 6) return '💛 Mejoremos esa calificación, !si se puede¡ !si se puede¡';
    return '🌱 Acompañamos tu proceso con cuidado y apoyo.';
  }

  colorPorPromedio(promedio: number): string {
    if (promedio >= 9) return 'sobresaliente';
    if (promedio >= 8) return 'logrado';
    if (promedio >= 6) return 'en-proceso';
    return 'exploracion';
  }
}
