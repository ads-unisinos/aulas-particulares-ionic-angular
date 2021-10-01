import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AulaPartService } from 'src/app/service/aula-part.service';
import { Aula } from 'src/models/Aula';

@Component({
  selector: 'app-reserva-aula',
  templateUrl: './reserva-aula.page.html',
  styleUrls: ['./reserva-aula.page.scss'],
})
export class ReservaAulaPage implements OnInit {
  aula: Aula;
  status: number;
  mensagem: string;

  constructor(
    private aulaService: AulaPartService,
    private router: Router) { }

  ngOnInit() {
    this.aula = this.aulaService.aulas[0];
    this.status = 0;
  }

}
