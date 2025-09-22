import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { TranslateService } from '@ngx-translate/core';
import { APP_INITIALIZER } from '@angular/core';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  export function appInitializerFactory(translate: TranslateService) {
  return () => {
    const idioma = localStorage.getItem('idioma') || 'es';
    translate.setDefaultLang('es');
    translate.use(idioma);
    return translate.get('titulo').toPromise(); // fuerza la carga
  };
}