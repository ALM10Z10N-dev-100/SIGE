import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta-activada',
  standalone: true,
  templateUrl: './cuenta-activada.html',
  styleUrls: ['./cuenta-activada.scss']
})
export class CuentaActivadaComponent {
  constructor(private router: Router) {}

  continuar(): void {
    this.router.navigate(['/']); // o home
  }
}
