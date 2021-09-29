import { Usuario } from 'src/models/usuario';

export interface Aula {
    id: number;
    data: Date;
    horario: string;
    conteudo: string;
    vinculado: Usuario;
    status: number;
}
