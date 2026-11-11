export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha_hash: string;
    ativo: boolean;
}

export type UsuarioInput = Omit<Usuario, 'id'>;