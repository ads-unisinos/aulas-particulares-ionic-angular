import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAulasPageRoutingModule } from './cadastro-aulas-routing.module';

import { CadastroAulasPage } from './cadastro-aulas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAulasPageRoutingModule
  ],
  declarations: [CadastroAulasPage]
})
export class CadastroAulasPageModule {}
