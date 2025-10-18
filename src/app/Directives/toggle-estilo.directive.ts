import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appToggleEstilo]',
  standalone: true
})
export class ToggleEstiloDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const toggle = this.el.nativeElement;
    const button = toggle.querySelector('button');
    const label = toggle.querySelector('label');
    const track = toggle.querySelector('.mdc-switch__track');
    const handle = toggle.querySelector('.mdc-switch__handle');
    const shadow = toggle.querySelector('.mdc-switch__shadow');

    const actualizarEstilo = () => {
      const isDarkMode = button?.getAttribute('aria-checked') === 'true';

      // Estilo del texto
      if (label) {
        const color = isDarkMode ? '#ffffff' : '#ffee00';
        this.renderer.setStyle(label, 'color', color);
        this.renderer.setStyle(label, 'transition', 'color 0.3s ease');
      }

      // Estilo del switch visual
      if (track) {
        const trackColor = isDarkMode ? '#424242' : '#ffee00';
        this.renderer.setStyle(track, 'background-color', trackColor);
        this.renderer.setStyle(track, 'border-radius', '20px');
        this.renderer.setStyle(track, 'transition', 'background-color 0.3s ease');
      }

      if (handle) {
        const handleColor = isDarkMode ? '#ffffff' : '#3e7cda';
        this.renderer.setStyle(handle, 'background-color', handleColor);
        this.renderer.setStyle(handle, 'border-radius', '50%');
        this.renderer.setStyle(handle, 'transition', 'background-color 0.3s ease');
      }

      if (shadow) {
        const borderColor = isDarkMode ? '#ffffff' : '#ffee00';
        this.renderer.setStyle(shadow, 'border', `2px solid ${borderColor}`);
        this.renderer.setStyle(shadow, 'transition', 'border 0.3s ease');
      }
    };

    // Aplica el estilo inicial
    actualizarEstilo();

    // Observa cambios en el atributo aria-checked
    if (button) {
      const observer = new MutationObserver(() => actualizarEstilo());
      observer.observe(button, { attributes: true, attributeFilter: ['aria-checked'] });
    }
  }
}