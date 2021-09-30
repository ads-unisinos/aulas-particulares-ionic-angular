import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAulasPage } from './cadastro-aulas.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroAulasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAulasPageRoutingModule {}
