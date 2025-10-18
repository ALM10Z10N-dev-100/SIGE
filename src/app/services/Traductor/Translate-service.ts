import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TraduccionService {
  constructor(private translate: TranslateService) {
    const idioma = localStorage.getItem('idioma') || 'es';
    this.translate.setDefaultLang('es');
    this.translate.use(idioma);
  }

  get currentLang(): string {
    return this.translate.currentLang;
  }

  use(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('idioma', lang);
  }

  instant(key: string): string {
    return this.translate.instant(key);
  }
}