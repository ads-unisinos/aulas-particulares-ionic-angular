import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-aulas',
    loadChildren: () => import('./pages/cadastro-aulas/cadastro-aulas.module').then( m => m.CadastroAulasPageModule)
  },
  {
    path: 'reserva-aula',
    loadChildren: () => import('./pages/reserva-aula/reserva-aula.module').then( m => m.ReservaAulaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
