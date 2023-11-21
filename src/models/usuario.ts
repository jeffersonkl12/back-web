class Usuario {
    id?: number;
    nome: string;
    email: string;
    senha: string;

    constructor(nome: string,email:string,senha: string,id?: number){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

export default Usuario;