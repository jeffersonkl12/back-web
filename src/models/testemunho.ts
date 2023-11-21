import Comentario from "./comentario";
import Usuario from "./usuario";

class Testemunho {
    id?: number;
    titulo: string;
    conteudo: string;
    dataCriacao: Date;
    autorId: number;

    constructor(titulo: string,
        conteudo: string,
        dataCriacao: Date,
        autorId: number,
        id?: number,
    ) {

        this.id = id;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.dataCriacao = dataCriacao;
        this.autorId = autorId;
    }
}

export default Testemunho;