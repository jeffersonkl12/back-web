class Comentario {
    id?: number;
    conteudo: string;
    usuarioId: number;
    testemunhoId: number;
    outroComentarioId?: number;

    constructor(conteudo: string,
        usuarioId: number,
        testemunhoId: number, 
        id?: number,
        outroComentarioId?: number){
            this.id = id;
            this.conteudo = conteudo;
            this.usuarioId = usuarioId;
            this.testemunhoId = testemunhoId;
            this.outroComentarioId = outroComentarioId;
        }
}

export default Comentario;