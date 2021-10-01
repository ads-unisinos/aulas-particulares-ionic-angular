import { Usuario } from 'src/models/usuario';

export interface Aula {
    id: string;
    titulo: string;
    dia: Date;
    inicio: Date;
    fim: Date;
    horario?: string;
    conteudo: string;
    vinculado: Usuario;
    status: number;
    participantes: Usuario[];
}
