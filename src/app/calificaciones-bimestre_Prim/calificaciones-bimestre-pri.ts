import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface AlumnoPrimaria {
  _id: string;
  alumnoId: number;
  nombre: string;
  apellido: string;
  edad: number;
  genero: 'Niño' | 'Niña';
  grupo: string;
  grado: string;
}

@Component({
  selector: 'app-calificaciones-bimestre-prim',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calificaciones-bimestre-pri.html',
  styleUrls: ['./calificaciones-bimestre-pri.scss']
})
export class CalificacionesBimestre {
  bimestres = ['Primer', 'Segundo', 'Tercer', 'Cuarto', 'Quinto'];
  materias = ['Matemáticas', 'Español', 'Ciencias', 'Historia', 'Geografía'];

  alumnos: AlumnoPrimaria[] = [];
  alumnoId = '';
  bimestreSeleccionado = 'Primer';
  mensajeGuardado = '';
  mensajeEmocional = '';


  calificaciones: { [materia: string]: number } = {};
  calificacionesDesglosadas: { bimestre: string; materias: { [materia: string]: number }; promedio: number } | null = null;

  private api = '/api';

  constructor(private http: HttpClient) {
    this.inicializarCalificaciones();
    this.cargarAlumnos();
  }

  cargarAlumnos() {
  this.http.get<AlumnoPrimaria[]>(`${this.api}/alumnos_Pri`).subscribe({
    next: (data) => {
      this.alumnos = data || [];
      console.log('✅ Alumnos cargados:', this.alumnos);
    },
    error: (err) => {
      console.error('❌ Error al cargar alumnos:', err);
      this.alumnos = [];
    }
  });
}


  get alumnoSeleccionado(): AlumnoPrimaria | undefined {
    return this.alumnos.find(a => a._id === this.alumnoId);
  }

  inicializarCalificaciones() {
    for (const materia of this.materias) {
      this.calificaciones[materia] = 0;
    }
  }

  calcularPromedio(): number {
    const valores = Object.values(this.calificaciones);
    const promedio = valores.reduce((a, b) => a + b, 0) / valores.length;
    return +promedio.toFixed(2);
  }

guardarCalificaciones() {
  const confirmacion = window.confirm(`¿Deseas guardar las calificaciones del ${this.bimestreSeleccionado} bimestre?`);
  if (!confirmacion) return;

  if (!this.alumnoId) {
    this.mensajeGuardado = '⚠️ Selecciona un alumno antes de guardar.';
    return;
  }

  const payload = {
    alumnoId: this.alumnoId,
    bimestre: this.bimestreSeleccionado,
    materias: { ...this.calificaciones },
    promedio: this.calcularPromedio()
  };

  this.http.post(`${this.api}/calificacionesPrim`, payload).subscribe({
    next: () => {
      this.mensajeGuardado = `✅ Calificaciones del ${this.bimestreSeleccionado} bimestre guardadas con éxito.`;
      this.mensajeEmocional = this.generarMensajeEmocional(this.calcularPromedio());
      this.calificacionesDesglosadas = {
        bimestre: this.bimestreSeleccionado,
        materias: { ...this.calificaciones },
        promedio: this.calcularPromedio()
      };
    },
    error: (err) => {
      const detalle = err?.error?.mensaje || 'Error desconocido';
      this.mensajeGuardado = `❌ No se pudo guardar. ${detalle}`;
      this.calificacionesDesglosadas = null;
    }
  });
 }

 generarMensajeEmocional(promedio: number): string {
  if (promedio >= 9.5) {
    return '🌟 ¡Excelente trabajo! Tu esfuerzo brilla en cada materia.';
  } else if (promedio >= 8) {
    return '😊 ¡Muy bien! Vas por un camino sólido, sigue así.';
  } else if (promedio >= 6) {
    return '💪 Buen intento. Hay áreas que puedes reforzar, ¡tú puedes!';
  } else {
    return '🧡 No te desanimes. Cada paso cuenta y siempre puedes mejorar.';
  }
}

}
