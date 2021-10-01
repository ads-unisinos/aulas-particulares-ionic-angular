import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaAulaPageRoutingModule } from './reserva-aula-routing.module';

import { ReservaAulaPage } from './reserva-aula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaAulaPageRoutingModule
  ],
  declarations: [ReservaAulaPage]
})
export class ReservaAulaPageModule {}
