import Comentario from "../models/comentario";
import Like from "../models/like";
import Testemunho from "../models/testemunho";
import Usuario from "../models/usuario";

const classePorNome: { [nome: string]: new (...args: any[]) => any } = {
    Usuario,
    Comentario,
    Like,
    Testemunho,
};

function instanciarClassePorNome(nome: string, ...args: any[]): any {
    const Classe = classePorNome[nome];
    if (Classe) {
        return new Classe(...args);
    } else {
        throw new Error(`Classe '${nome}' não encontrada.`);
    }
}



function excluirCampos(
    objeto: any,
    camposAExcluir: string[]
) {
    const novoObjeto = instanciarClassePorNome("Usuario");
    for (let campo of camposAExcluir) {
        delete novoObjeto[campo];
    }

    for (let key of Object.keys(novoObjeto)) {
        novoObjeto[key] = true;
    }

    return novoObjeto;
    console.log(novoObjeto);
}

export default excluirCampos;