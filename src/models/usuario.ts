import { Perfil } from 'src/enum/Perfil';

export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    perfil: Perfil;
    status: number;
}
