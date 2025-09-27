export interface CampoFormulario {
  nombre: string;
  tipo: string;
  placeholder: string;
  icono: string;
  validaciones?: any[];
  requerido?: boolean;
}
