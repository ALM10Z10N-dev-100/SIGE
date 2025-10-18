import { Routes } from '@angular/router';
import { ConfirmacionComponent } from './confirmacion/confirmacion';
import { CuentaActivadaComponent } from './cuenta-activada/cuenta-activada';

export const routes: Routes = [
  {
    path: '',
    children: [
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
      {
        path: 'quienes-somos',
        loadComponent: () => import('./quienes-somos/quienes-somos')
                            .then(m => m.QuienesSomos)
      },
      {
        path: 'conectando-el-aprendizaje',
        loadComponent: () => import('./conectando-el-aprendizaje/conectando-el-aprendizaje')
                            .then(m => m.ConectandoElAprendizaje)
      },
      {
        path: 'docentes',
        loadComponent: () => import('./docentes/docentes')
                            .then(m => m.Docentes)
      },
      {
        path: 'manitas-entusiastas',
        loadComponent: () => import('./manitas-entusiastas/manitas-entusiastas')
                            .then(m => m.ManitasEntusiastas)
      },
      {
        path: 'una-comunidad-que-inspira',
        loadComponent: () => import('./una-comunidad-que-inspira/una-comunidad-que-inspira')
                            .then(m => m.UnaComunidadQueInspira)
      },
      {
        path: 'configuracion',
        loadComponent: () => import('./configuracion/configuracion')
                            .then(m => m.Configuracion)
      },
      {
        path: 'recursos',
        loadComponent: () => import('./recursos/recursos')
                            .then(m => m.RecursosPanelComponent)
      },
      {
        path: 'calendario',
        loadComponent: () => import('./calendario/calendario.component')
                            .then(m => m.CalendarioEmergenteComponent)
      },
      {
        path: 'login',
        loadComponent: () => import('./login.component/login.component')
                            .then(m => m.LoginComponent)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard')
                            .then(m => m.DashboardCalificaciones)
      },
      {
        path: 'calificaciones-bimestre_Prim',
        loadComponent: () => import('./calificaciones-bimestre_Prim/calificaciones-bimestre-pri')
                            .then(m => m.CalificacionesBimestre)
      },
      {
        path: 'Evaluaciones',
        loadComponent: () => import('./evaluaciones/evaluaciones')
                            .then(m => m.Evaluaciones)
      },
      { path: 'confirmacion', component: ConfirmacionComponent },
      { path: 'cuenta-activada', component: CuentaActivadaComponent }
    ]
  }
]; 