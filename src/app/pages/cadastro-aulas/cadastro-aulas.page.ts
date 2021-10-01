import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AulaPartService } from 'src/app/service/aula-part.service';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-cadastro-aulas',
  templateUrl: './cadastro-aulas.page.html',
  styleUrls: ['./cadastro-aulas.page.scss'],
})
export class CadastroAulasPage implements OnInit {
  titulo: string;
  dia: Date;
  inicio: Date;
  fim: Date;
  conteudo: string;
  participantes: Usuario[];
  mensagem: string;

  constructor(
    private aulaService: AulaPartService,
    private router: Router) { }

  ngOnInit() {
    // se a tela de alterar é a mesma que a tela de incluir
    if(this.aulaService.aula){
      this.titulo = this.aulaService.aula.titulo;
      this.dia = this.aulaService.aula.dia;
      this.inicio = this.aulaService.aula.inicio;
      this.fim = this.aulaService.aula.fim;
      this.conteudo = this.aulaService.aula.conteudo;
      this.participantes = new Array(...this.aulaService.aula.participantes);
    }
    else{
      this.participantes = [];
      this.dia = new Date();
      this.inicio = new Date();
      this.fim = new Date();
    }
  }

  salvar(){
    this.aulaService.salvar(this.titulo, this.dia, this.inicio, this.fim, this.conteudo,
      this.participantes);
    this.mensagem = 'salvo com sucesso!!!';
  }

  logout(){
    this.router.navigate(['/home']);
  }

  recusar(){
    console.log('aula recusada.');
  }

  aceitar(){
    console.log('aula aceita.');
  }


}
