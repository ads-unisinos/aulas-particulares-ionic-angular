import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AulaPartService } from 'src/app/service/aula-part.service';

@Component({
  selector: 'app-cadastro-aulas',
  templateUrl: './cadastro-aulas.page.html',
  styleUrls: ['./cadastro-aulas.page.scss'],
})
export class CadastroAulasPage implements OnInit {
  dia: Date;
  inicio: string;
  fim: string;
  conteudo: string;
  mensagem: string;

  constructor(
    private aulaService: AulaPartService,
    private router: Router) { }

  ngOnInit() {
  }

  salvar(){
    this.aulaService.salvar(this.dia, this.inicio, this.fim, this.conteudo);
    this.mensagem = 'salvo com sucesso!!!';
  }

  logout(){
    this.router.navigate(['/home']);
  }

}
