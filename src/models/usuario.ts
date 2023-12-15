class Usuario {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    sobrenome?: string;
    estado?: string;

    constructor(nome: string,email:string,senha: string,sobrenome?: string,estado?: string,id?: number){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.sobrenome = sobrenome;
        this.estado = estado;
    }
}

export default Usuario;