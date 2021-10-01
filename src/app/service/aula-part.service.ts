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
  aula: Aula;
  logado: Usuario;
  status: number;

  constructor() {
    this.usuarios = [
      {id: 1,nome: 'fulano de tal', perfil: Perfil.professor , email: 'fulanodetal@teste.com', senha: '123', status: 0 },
      {id: 2,nome: 'beltrano', perfil: Perfil.aluno , email: 'beltrano@teste.com', senha: '123', status: 0 }
    ];

    this.logado = null;
    this.aula = null;
  }

  reservar() {
    for (const item of this.aula.participantes) {
      if(item.id === this.logado.id){
        this.status = 1;
        item.status = 1;
        console.log(item);
        return;
      }
    }

    const copiaUsuario = this.logado;
    copiaUsuario.status = 1;
    this.aula.participantes.push(copiaUsuario);
  }

  desmarcar() {
    throw new Error('Method not implemented.');
  }

  login(email: string, senha: string): void{
    const usuario = this.usuarios.find( u => u.email === email && u.senha === senha);
    if (usuario){
      this.logado = usuario;
      return;
    }
    throw new Error('Usuario ou senha invalida!!');
  }

  salvar(titulo: string, dia: Date, inicio: Date, fim: Date, conteudo: string, participantes: Usuario[]): void
  {
    const id = new Utils().genUniqueId();

    this.aula = {
      id: id,
      titulo: titulo,
      dia: dia,
      inicio: inicio,
      fim: fim,
      horario: `${inicio}-${fim}`,
      conteudo: conteudo,
      vinculado: null,
      status: 0,
      participantes: new Array(...participantes)
    };

    console.log(this.aula);
  }

}
