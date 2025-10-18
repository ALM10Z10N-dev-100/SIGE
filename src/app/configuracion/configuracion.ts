import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../app';  
import { animate, style, transition, trigger } from '@angular/animations';
import { ToggleEstiloDirective } from '../Directives/toggle-estilo.directive';
import { TranslateDirective } from '../Directives/Translate.directive';
import { TraduccionService } from '../services/Traductor/Translate-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ToggleEstiloDirective,
    TranslateDirective,
    TranslateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './configuracion.html',
  styleUrls: ['./configuracion.scss'],
  animations: [
    trigger('fadeOut', [
      transition('entrada => salida', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ]),
      transition('salida => entrada', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeSwitch', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('fadeAlerta', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class Configuracion {
  idioma = 'es';
  animandoSalida = false;
  modoOscuro = false;
  mostrarAlerta = false;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private traduccion: TraduccionService,
  ) {}

  ngOnInit(): void {
    const temaGuardado = localStorage.getItem('modoOscuro');
    this.modoOscuro = temaGuardado === 'true';
    this.themeService.toggleDarkMode(this.modoOscuro);
  }

  alternarIdioma(): void {
    const nuevoIdioma = this.traduccion.currentLang === 'es' ? 'en' : 'es';
    this.traduccion.use(nuevoIdioma);
    localStorage.setItem('idioma', nuevoIdioma);
    this.idioma = nuevoIdioma;
  }

  cambiarIdioma(nuevoIdioma: string): void {
    this.idioma = nuevoIdioma;
  }

  onToggleDark(isDark: boolean): void {
    this.modoOscuro = isDark;
    localStorage.setItem('modoOscuro', String(isDark));
    this.themeService.toggleDarkMode(isDark);
  }

  guardarCambios(): void {
    localStorage.setItem('idioma', this.idioma);
    this.mostrarAlerta = true;

    setTimeout(() => {
      this.mostrarAlerta = false;
      this.cerrarPanel();
    }, 3000);
  }

  cerrarPanel(): void {
    this.animandoSalida = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 300);
  }

  sunIcon = 'https://animatedicons.co/get-icon?name=Sun&style=minimalistic&token=c58da3e8-449f-4208-b31a-4b1a265d0d78';
  moonIcon = 'https://animatedicons.co/get-icon?name=Moon&style=minimalistic&token=c58da3e8-449f-4208-b31a-4b1a265d0d78';
}
