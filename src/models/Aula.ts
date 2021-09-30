import { Usuario } from 'src/models/usuario';

export interface Aula {
    id: string;
    dia: Date;
    horario: string;
    conteudo: string;
    vinculado: Usuario;
    status: number;
}
