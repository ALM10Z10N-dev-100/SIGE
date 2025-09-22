import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Juegos, Libros, RecursoBase, Videos } from './recursos.model';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-recursos-panel',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './recursos.html',
  styleUrls: ['./recursos.scss'],
  animations: [
    trigger('fadeOverlay', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class RecursosPanelComponent {
  recursos_Lib: Libros[] = [
    {
      id: '1',
      tipo: 'Libros',
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      descripcion: 'Una historia sobre la infancia, la imaginación y el corazón.',
      imagen: 'assets/Recursos/libros/El-principito.jpeg',
      url:'https://dn790004.ca.archive.org/0/items/el-principito_202206/EL-PRINCIPITO.pdf',
      idiomaES: 'Español',
      idiomaEN: 'Inglés',
      edadRecomendada: '5 - 8 años y  9 - 12 años'
    },
    {
      id: '1.1',
      tipo: 'Libros',
      titulo: 'La Tempestad',
      autor: 'Florence Seyvos - Claude Ponti',
      descripcion: 'Una historia sobre el poder, el perdón y la magia que habita en lo invisible.',
      imagen: 'assets/Recursos/libros/La-Tempestad.jpeg',
      url:'https://cuentoenlasnoches.blogspot.com/2015/08/la-tempestad-florence-seyvos-y-claude.html',
      idiomaES: 'Español',
      idiomaEN: 'Inglés',
      edadRecomendada: ' 4 - 8 años '
    },
    {
      id: '1.3',
      tipo: 'Libros',
      titulo: 'El Monstruo De Colores',
      autor: 'Anna Llenas',
      descripcion: 'Una historia que enseña a los niños a reconocer lo que sienten, poniendo color a sus emociones para que puedan entenderlas, ordenarlas y expresarlas con claridad.',
      imagen: 'assets/Recursos/libros/El-Monstruo-De-Colores.jpeg',
      url:'https://drive.google.com/file/d/1D5Kvf3th64wAwSvz7T11pSxTZAIeRKJW/view?fbclid=IwQ0xDSwMMv6JjbGNrAwy_q2V4dG4DYWVtAjExAAEe1BMFBaKKmg8ziqZazZI9E6q0-7wGO7Y4bkDo-TBnba-biMOcZB6MHuNAN18_aem_K7dhAtpwdW3EXFZ_KX2bKQ',
      idiomaES: 'Español',
      idiomaEN: 'Inglés',
      edadRecomendada: ' 3 - 4 años  y 5 - 6  '
    },
  ];

  recursos_Vid: Videos[] = [
    {
      tipo: 'Videos',
      id: '1',
      titulo: 'Cómo Iniciar A La Lectura Con Juegos',
      autor:'',
      idiomaEN:'Ingles',
      idiomaES:'Español',
      url: 'https://youtu.be/Inu7ZMocELY?si=Qk9hWgaydU7986wJ',
      edadRecomendada:'',
    }
  ];

  recursos_Jue: Juegos[] = [
    {
      id: '1',
      autor:'',
      idiomaEN:'Ingles',
      idiomaES:'Español',
      tipo: 'Juegos',
      titulo: 'Memorama',
      imagen: 'assets/Recursos/Juegos/juego-memorama.jpg',
      url:'',
      edadRecomendada: '4 años',
    }
  ];

  categoriaSeleccionada: 'Libros' | 'Videos' | 'Juegos' = 'Libros';
  recursoSeleccionado: RecursoBase | null = null;

  get recursosFiltrados(): RecursoBase[] {
    switch (this.categoriaSeleccionada) {
      case 'Libros':
        return this.recursos_Lib;
      case 'Videos':
        return this.recursos_Vid;
      case 'Juegos':
        return this.recursos_Jue;
      default:
        return [];
    }
  }

  mapaCategorias: Record<string, 'Libros' | 'Videos' | 'Juegos'> = {
  BOOKS: 'Libros',
  VIDEOS: 'Videos',
  GAMES: 'Juegos'
};

filtrarPorCategoria(clave: string) {
  const tipo = this.mapaCategorias[clave];
  if (tipo) {
    this.categoriaSeleccionada = tipo;
  }
}


  mostrarOverlay(recurso: RecursoBase) {
    this.recursoSeleccionado = recurso;
  }
  
  cerrarOverlay() {
    this.recursoSeleccionado = null;
  }

  constructor(private location: Location){}

  volver(): void {
    this.location.back();
  }
}