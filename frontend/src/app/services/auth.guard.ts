import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './authService';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const usuario = this.authService.getUsuarioActual();

    // Validación básica del usuario
    const tieneToken = typeof usuario?.token === 'string' && usuario.token.trim().length > 0;
    const tieneNombre = typeof usuario?.nombre === 'string' && usuario.nombre.trim().length > 0;

    if (tieneToken && tieneNombre) {
      return true;
    }

    // 🚫 Usuario no autenticado: redirige al login
    this.router.navigate(['/login'], {
      queryParams: { returnUrl: state.url }
    });

    return false;
  }
}