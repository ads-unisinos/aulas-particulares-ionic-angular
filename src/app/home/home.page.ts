import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/enum/Perfil';
import { AulaPartService } from '../service/aula-part.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  senha: string;
  mensagem: string;

  constructor(
    private aulaService: AulaPartService,
    private router: Router) {}

  login(){
    try {
      this.aulaService.login(this.email, this.senha);
      if(this.aulaService.logado.perfil === Perfil.professor){
        this.router.navigate(['/cadastro-aulas']);
        return;
      }
      this.router.navigate(['/reserva-aula']);
    } catch (error) {
      this.mensagem = error;
    }
  }
}
