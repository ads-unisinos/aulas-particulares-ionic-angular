import { Injectable } from '@angular/core';
import { Perfil } from 'src/enum/Perfil';
import { Aula } from 'src/models/Aula';
import { Usuario } from 'src/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AulaPartService {
  usuarios: Usuario[];
  aulas: Aula[];
  logado: Usuario;

  constructor() {
    this.usuarios = [
      {id: 1,nome: 'fulano de tal', perfil: Perfil.professor , login: 'fulanodetal@teste.com', senha: '123' },
      {id: 2,nome: 'beltrano', perfil: Perfil.aluno , login: 'beltrano@teste.com', senha: '123' }
    ];

  }
}
