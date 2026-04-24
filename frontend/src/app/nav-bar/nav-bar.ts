import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService} from '../services/authService';
import { CommonModule } from '@angular/common';
import { SaludoUsuarioComponent } from '../saludo-usuario.component/saludo-usuario.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule, SaludoUsuarioComponent],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBar implements OnInit {
  imagePath: any;
  nombre: string | null = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  this.authService.usuario$.subscribe(usuario => {
    if (usuario) {
      this.nombre = usuario.nombre;
    } else {
      this.nombre = null;
    }
  });

  // Restaurar usuario desde localStorage si existe
  const token = localStorage.getItem('token');
  const nombre = localStorage.getItem('nombreUsuario');
  const rol = localStorage.getItem('rolUsuario') as 'alumno' | 'maestro';

  if (token && nombre && rol) {
    this.authService['usuarioSubject'].next({ token, nombre, rol }); // ✅ Ahora sí cumple con la interfaz
  }
}


  ir_A_quienes_Somos() {
    this.router.navigate(['/quienes-somos']);
  }
}