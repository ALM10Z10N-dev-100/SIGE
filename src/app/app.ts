import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  toggleDarkMode(isDark: boolean) {
    this.darkMode.next(isDark);
    const body = document.body;
    body.classList.toggle('dark-mode', isDark);
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TranslateModule, HttpClientModule],
  styleUrls: ['./app.scss']
})
export class App {

  constructor(
    public router: Router,
    private translate: TranslateService,
  ) {
    const idioma = localStorage.getItem('idioma') || 'es';
if (!localStorage.getItem('idioma')) {
  localStorage.setItem('idioma', 'es');
}
this.translate.setDefaultLang('es');
this.translate.use(idioma);
  }

  isInicio(): boolean {
    return this.router.url === '/';
  }
}
