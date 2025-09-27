import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
@Directive({
  selector: '[btnHamburguesa]',
  standalone: true
})
export class BtnHamburguesaDirective {
  @Output() clicHamburguesa = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    console.log('¡Clic en el ícono del menú!');
    this.clicHamburguesa.emit();
  }
}