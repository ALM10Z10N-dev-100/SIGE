import {Component,CUSTOM_ELEMENTS_SCHEMA,ElementRef,HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnHamburguesaDirective } from '../Directives/btn-hamburguesa.directive';
import { CommonModule } from '@angular/common';
import {trigger,state,style,transition,animate} from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule,BtnHamburguesaDirective,CommonModule,TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './side-bar.html',
  styleUrls: ['./side-bar.scss'],
  animations: [
    trigger('colapsarMenu', [
      state('expandido', style({ width: '250px', opacity: 1 })),
      state('colapsado', style({ width: '60px', opacity: 1 })),
      transition('expandido <=> colapsado', animate('300ms ease-in-out'))
    ]),
    trigger('colapsarPanel', [
    state('expandido', style({
      opacity: 1,
      transform: 'scale(1)',
      borderRadius: '20px',
      padding: '10px'
    })),
    state('colapsado', style({
      opacity: 0,
      transform: 'scale(0.8)',
      borderRadius: '20px',
      padding: '0px'
    })),
    transition('expandido <=> colapsado', animate('300ms ease-in-out'))
  ])
 ]
})
export class SideBar {
  mostrarMenu = false;
  activePanel: 'configuracion' | 'recursos' | 'calendario' | 'login' |'calificaciones' | null=null;
  estadoPanel: 'expandido' | 'colapsado' = 'colapsado';

  constructor(private elRef: ElementRef) { }

  alternarMenu() {
    this.mostrarMenu = !this.mostrarMenu;
    if (!this.mostrarMenu) {
      this.togglePanel(null);
    }
  }

  cerrarMenu() {
    this.mostrarMenu = false;
    this.togglePanel(null);
  }

  togglePanel(panel: 'configuracion' | 'recursos' | 'calendario' | 'login' | 'calificaciones' | null=null) {
    if (panel === this.activePanel) {
      this.activePanel = null;
    } else {
      this.activePanel = panel;
    }
    this.estadoPanel = this.activePanel ? 'expandido' : 'colapsado';
  }

  /**
   * Captura todos los mousedown en el documento.
   * - Si hacer clic fuera del componente y el menú está abierto: cierra todo.
   * - Si hay un panel abierto y el clic está fuera del icono y contenido: cierra solo el panel.
   */
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dentroComponente = this.elRef.nativeElement.contains(target);

    // Cerrar menú completo al hacer clic fuera del componente
    if (this.mostrarMenu && !dentroComponente) {
      this.cerrarMenu();
      return;
    }

    // Si no hay panel abierto, nada más que hacer
    if (!this.activePanel) {
      return;
    }
  }
}