import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

interface EventoCalendario {
  id: number;
  titulo: string;
  fecha: Date;
  descripcion?: string;
  tipo: 'cumpleaños' | 'escolar' | 'festivo' | 'reunion' | 'emocional' | 'tarea' | 'recordatorio';
  icono: string;
  color: string;
}

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioEmergenteComponent {
  fechaActual = new Date();
  diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  eventos: EventoCalendario[] = [];
  mostrarCalendario = true;

  @ViewChild('calendario', { static: false }) calendarioRef!: ElementRef;

  constructor(private router: Router) {
    this.agregarEventoDelDia();
  }

  @HostListener('document:click', ['$event'])
  cerrarSiClickFuera(event: MouseEvent) {
    const clicFuera = this.calendarioRef && !this.calendarioRef.nativeElement.contains(event.target);
    if (clicFuera) {
      this.mostrarCalendario = false;
      this.router.navigate(['/']); 
    }
  }

  agregarEventoDelDia() {
    const clave = this.formatearClaveFecha(this.fechaActual);
    const evento = this.diasFestivos[clave];
    if (evento && !this.eventos.some(e => e.id === evento.id)) {
      this.eventos.push(evento);
    }
  }

  formatearClaveFecha(fecha: Date): string {
    const mes = `${fecha.getMonth() + 1}`.padStart(2, '0');
    const dia = `${fecha.getDate()}`.padStart(2, '0');
    return `${mes}-${dia}`;
  }

  cambiarMes(offset: number) {
    this.fechaActual = new Date(
      this.fechaActual.getFullYear(),
      this.fechaActual.getMonth() + offset,
      1
    );
    this.agregarEventoDelDia();
  }

  getDiasDelMes(): (Date | null)[] {
    const dias: (Date | null)[] = [];
    const año = this.fechaActual.getFullYear();
    const mes = this.fechaActual.getMonth();
    const primerDia = new Date(año, mes, 1);
    const ultimoDia = new Date(año, mes + 1, 0).getDate();
    const offsetInicio = primerDia.getDay();

    for (let i = 0; i < offsetInicio; i++) {
      dias.push(null);
    }

    for (let i = 1; i <= ultimoDia; i++) {
      dias.push(new Date(año, mes, i));
    }

    return dias;
  }

  eventosDelDia(dia: Date): EventoCalendario[] {
    return this.eventos.filter(
      e => new Date(e.fecha).toDateString() === dia.toDateString()
    );
  }


  diasFestivos: { [key: string]: EventoCalendario } = {
    '09-21': {
      id: 99,
      titulo: 'Día de la paz',
      fecha: new Date(this.fechaActual.getFullYear(), 8, 21),
      tipo: 'festivo',
      icono: '🌍',
      color: '#bbdefb',
      descripcion: 'Reflexión sobre la paz mundial'
    },
    '12-25': {
      id: 100,
      titulo: 'Navidad',
      fecha: new Date(this.fechaActual.getFullYear(), 11, 25),
      tipo: 'festivo',
      icono: '🎄',
      color: '#c8e6c9',
      descripcion: 'Celebración familiar y afectiva'
    }
  };
}
