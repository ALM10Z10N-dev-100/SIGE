import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Usuario {
  token: string;
  nombre: string;
  rol: 'alumno' | 'maestro';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  // 🔁 Estado reactivo del usuario
  private usuarioSubject = new BehaviorSubject<Usuario | null>(null);
  usuario$ = this.usuarioSubject.asObservable();

  constructor(private http: HttpClient) {
    // Si hay datos en localStorage, los cargamos
    const token = localStorage.getItem('token');
    const nombre = localStorage.getItem('nombreUsuario');
    if (token && nombre) {
          const rol = localStorage.getItem('rolUsuario') as 'alumno' | 'maestro';
      this.usuarioSubject.next({ token, nombre, rol});
    }
  }

  login(datos: any): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, datos).pipe(
      tap(usuario => {
        localStorage.setItem('token', usuario.token);
        localStorage.setItem('nombreUsuario', usuario.nombre);
        localStorage.setItem('rolUsuario', usuario.rol);
        this.usuarioSubject.next(usuario); // 🔁 Emitimos el nuevo usuario
      })
    );
  }

registro(datos: any): Observable<Usuario> {
  return this.http.post<Usuario>(`${this.apiUrl}/registrar`, datos).pipe(
    tap(usuario => {
      console.log('Usuario registrado:', usuario);
      localStorage.setItem('token', usuario.token);
      localStorage.setItem('nombreUsuario', usuario.nombre);
      localStorage.setItem('rolUsuario', usuario.rol);
      this.usuarioSubject.next(usuario);
    })
  );
}


confirmarCodigo(datos: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/confirmar`, datos); 
}



  // 🔍 Método para obtener el usuario actual directamente
  getUsuarioActual(): Usuario | null {
    return this.usuarioSubject.getValue();
  }

  // 🔓 Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nombreUsuario');
    this.usuarioSubject.next(null);
  }
}