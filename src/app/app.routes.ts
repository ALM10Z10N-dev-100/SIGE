import { Routes } from '@angular/router';
import { ConfirmacionComponent } from './confirmacion/confirmacion';
import { CuentaActivadaComponent } from './cuenta-activada/cuenta-activada';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./bienvenida/bienvenida')
                            .then(m => m.Bienvenida)
      },
      {
        path: '',
        outlet: 'nav-bar',
        loadComponent: () => import('./nav-bar/nav-bar')
                            .then(m => m.NavBar)
      },
      {
        path: '',
        outlet: 'side-bar',
        loadComponent: () => import('./side-bar/side-bar')
                            .then(m => m.SideBar)
      },
      {
        path: '',
        outlet: 'home',
        loadComponent: () => import('./home/home')
                            .then(m => m.Home)
      },
      {
        path: '',
        outlet: 'bienvenida',
        loadComponent: () => import('./bienvenida/bienvenida')
                            .then(m => m.Bienvenida)
      },
      // ... todas las demás rutas como las tienes
      { path: 'confirmacion', component: ConfirmacionComponent},
      { path: 'cuenta-activada', component: CuentaActivadaComponent  }
    ]
  }
];