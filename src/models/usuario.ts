import { Perfil } from 'src/enum/Perfil';

export interface Usuario {
    id: number;
    nome: string;
    login: string;
    senha: string;
    perfil: Perfil;
}
