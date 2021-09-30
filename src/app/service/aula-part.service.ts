/* eslint-disable object-shorthand */
import { Injectable } from '@angular/core';
import { Perfil } from 'src/enum/Perfil';
import { Aula } from 'src/models/Aula';
import { Usuario } from 'src/models/usuario';
import { Utils } from 'src/helper/Utils';

@Injectable({
  providedIn: 'root'
})
export class AulaPartService {
  usuarios: Usuario[];
  aulas: Aula[];
  logado: Usuario;
  status: number;

  constructor() {
    this.usuarios = [
      {id: 1,nome: 'fulano de tal', perfil: Perfil.professor , login: 'fulanodetal@teste.com', senha: '123' },
      {id: 2,nome: 'beltrano', perfil: Perfil.aluno , login: 'beltrano@teste.com', senha: '123' }
    ];

    this.logado = null;
    this.aulas = [];
  }

  salvar(dia: Date, inicio: string, fim: string, conteudo: string): void
  {
    const id = new Utils().genUniqueId();

    this.aulas.push({
      id: id,
      dia: dia,
      horario: `${inicio}-${fim}`,
      conteudo: conteudo,
      vinculado: null,
      status: 0
    });
  }


}
