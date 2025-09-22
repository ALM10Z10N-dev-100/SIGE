export type CategoriaRecurso = 'Libros' | 'Videos' | 'Juegos';

export interface RecursoBase {
  id: string;
  tipo: CategoriaRecurso;
  titulo: string;
  imagen?: string; 
  descripcion?: string; 
  url?: string;
  autor: string;
  idiomaES: string;
  idiomaEN: string;
  edadRecomendada: string;
}

export interface Libros extends RecursoBase {
  tipo: 'Libros';
  titulo: string;
  autor: string;
  idiomaES: string;
  idiomaEN: string;
  descripcion: string;
  imagen: string;
}

export interface Videos extends RecursoBase {
  tipo: 'Videos';
  url: string;
  imagen?: string; // Por si en el futuro quieres miniaturas
  descripcion?: string; // Para enriquecer la experiencia emocional
}

export interface Juegos extends RecursoBase {
  tipo: 'Juegos';
  edadRecomendada: string;
  imagen: string;
}