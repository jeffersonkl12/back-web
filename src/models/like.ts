class Like{
    id: number;
    comentarioId: number;
    usuarioId: number;

    constructor(id: number,comentarioId: number, usuarioId: number){
        this.id = id;
        this.comentarioId = comentarioId;
        this.usuarioId = usuarioId;
    }
}

export default Like;