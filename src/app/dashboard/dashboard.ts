import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Nivel = 'Exploración' | 'En proceso' | 'Logrado' | 'Sobresaliente';
type Bimestre = 'Primer' | 'Segundo' | 'Tercer';
type Area = 'Socioemocional' | 'Lenguaje' | 'PensamientoMatematico' | 'Motricidad';

type EvaluacionBimestre = Partial<Record<Area, Nivel>>;

interface AlumnoConEvaluacion {
  _id: string;
  alumnoId: string;
  nombre: string;
  apellido: string;
  edad: number;
  genero: string;
  grupo: string;
  grado: number;
  evaluacion: Partial<Record<Bimestre, EvaluacionBimestre>>;
  nivelesResumen?: Partial<Record<Bimestre, Nivel>>;
  resumen?: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardCalificaciones {
  bimestres: Bimestre[] = ['Primer', 'Segundo', 'Tercer'];
  areas: Area[] = ['Socioemocional', 'Lenguaje', 'PensamientoMatematico', 'Motricidad'];
  
  alumnos: AlumnoConEvaluacion[] = [];
  evaluaciones: AlumnoConEvaluacion[] = [];

  alumnoId = '';
  cantidadBimestres = 1;
  mensajeGuardado = '';

  evaluacionesCaptura: { [bimestre in Bimestre]?: EvaluacionBimestre } = {};
  evaluacionDesglosada: { bimestre: Bimestre; evaluacion: EvaluacionBimestre } | null = null;


  private api = '/api';

  getNivel(bim: Bimestre, area: Area): Nivel | undefined {
  return this.getEvaluacion(bim)[area];
}

setNivel(bim: Bimestre, area: Area, nivel: Nivel) {
  this.getEvaluacion(bim)[area] = nivel;
}


  constructor(private http: HttpClient) {
    this.cargarAlumnos();
    this.cargarEvaluaciones();
  }

  cargarAlumnos() {
    this.http.get<AlumnoConEvaluacion[]>(`${this.api}/alumnos`).subscribe({
      next: (data) => this.alumnos = data || [],
      error: (err) => {
        console.error('❌ Error al cargar alumnos:', err);
        this.alumnos = [];
      }
    });
  }

  cargarEvaluaciones() {
    this.http.get<AlumnoConEvaluacion[]>(`${this.api}/calificaciones`).subscribe({
      next: (data) => {
        this.evaluaciones = (data || []).map(a => ({
          ...a,
          resumen: this.mensajeGeneral(a.evaluacion as Record<Bimestre, EvaluacionBimestre>)
        }));
      },
      error: (err) => {
        console.error('❌ Error al cargar evaluaciones:', err);
        this.evaluaciones = [];
      }
    });
  }

guardarEvaluacionDesdeDashboard(bimestre: Bimestre) {
  const confirmacion = window.confirm(`¿Estás seguro de guardar la evaluación de ${bimestre} bimestre? Puedes hacer cambios antes de continuar.`);
  if (!confirmacion) return;

  this.mensajeGuardado = '';
  const evaluacion = this.evaluacionesCaptura[bimestre];

  if (!this.alumnoId || !evaluacion) {
    this.mensajeGuardado = '⚠️ Faltan datos para guardar.';
    return;
  }

  if (!this.evaluacionesCaptura[bimestre]) {
    this.evaluacionesCaptura[bimestre] = {};
  }

  const nivelesValidos: Nivel[] = ['Exploración', 'En proceso', 'Logrado', 'Sobresaliente'];
  for (const area of this.areas) {
    const nivel = evaluacion[area];
    if (!nivel || !nivelesValidos.includes(nivel)) {
      this.mensajeGuardado = `⚠️ El nivel  "${area}" en ${bimestre} bimestre no es válido.`;
      return;
    }
  }

  const resumen = this.nivelDominante(evaluacion);
  const payload = {
    alumnoId: this.alumnoId,
    evaluacion: { bimestre, ...evaluacion },
    nivelResumen: resumen
  };

  this.http.post(`${this.api}/calificaciones`, payload).subscribe({
    next: () => {
      this.mensajeGuardado = `✅ Evaluación de ${bimestre} bimestre guardada con éxito.`;
      this.evaluacionDesglosada = {
  bimestre,
  evaluacion: { ...evaluacion } // ← esto crea una copia segura
};
      this.evaluacionesCaptura[bimestre] = {};
      this.cargarEvaluaciones();
    },
    error: (err) => {
      const detalle = err?.error?.detalle || 'Error desconocido';
      this.mensajeGuardado = `❌ No se pudo guardar. ${detalle}`;
      this.evaluacionDesglosada = null;
    }
  });
}

  get alumnoSeleccionado(): AlumnoConEvaluacion | undefined {
    return this.alumnos.find(a => a._id === this.alumnoId);
  }

  nivelDominante(evaluacion: EvaluacionBimestre): Nivel {
    const conteo: Record<Nivel, number> = {
      'Exploración': 0, 'En proceso': 0, 'Logrado': 0, 'Sobresaliente': 0
    };
    for (const area of this.areas) {
      const nivel = evaluacion?.[area];
      if (nivel) conteo[nivel]++;
    }
    const orden: Nivel[] = ['En proceso', 'Logrado', 'Sobresaliente', 'Exploración'];
    return (Object.keys(conteo) as Nivel[])
      .sort((a, b) => conteo[b] - conteo[a] || orden.indexOf(b) - orden.indexOf(a))[0];
  }

  mensajeGeneral(evaluacionPorBimestres: Partial<Record<Bimestre, EvaluacionBimestre>>): string {
    const niveles: Nivel[] = [];
    for (const bimestre of this.bimestres) {
      const evalBim = evaluacionPorBimestres?.[bimestre];
      if (evalBim) niveles.push(this.nivelDominante(evalBim));
    }
    if (!niveles.length) return '🌱 Sin evaluaciones disponibles.';
    const conteo: Record<Nivel, number> = {
      'Exploración': 0, 'En proceso': 0, 'Logrado': 0, 'Sobresaliente': 0
    };
    for (const n of niveles) conteo[n]++;
    const orden: Nivel[] = ['En proceso', 'Logrado', 'Sobresaliente', 'Exploración'];
    const dominante = (Object.keys(conteo) as Nivel[])
      .sort((a, b) => conteo[b] - conteo[a] || orden.indexOf(b) - orden.indexOf(a))[0];
    switch (dominante) {
      case 'Sobresaliente': return '🌈 Avanza con alegría y curiosidad. ¡Sigue explorando!';
      case 'Logrado': return '🌟 Logros constantes. Celebramos cada descubrimiento.';
      case 'En proceso': return '💛 En acompañamiento: cada día suma nuevas habilidades.';
      default: return '🌱 Explorando con apoyo. Caminamos a su ritmo, con cuidado y juego.';
    }
  }

  claseChip(nivel?: Nivel): string {
    return {
      'Exploración': 'chip exploracion',
      'En proceso': 'chip en-proceso',
      'Logrado': 'chip logrado',
      'Sobresaliente': 'chip sobresaliente'
    }[nivel as Nivel] || 'chip vacio';
  }

getEvaluacion(bim: Bimestre): EvaluacionBimestre {
  if (!this.evaluacionesCaptura[bim]) {
    this.evaluacionesCaptura[bim] = {};
  }
  return this.evaluacionesCaptura[bim]!;
}
}
