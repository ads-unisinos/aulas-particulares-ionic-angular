import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaAulaPage } from './reserva-aula.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaAulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaAulaPageRoutingModule {}
