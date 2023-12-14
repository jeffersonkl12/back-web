import ErrorBase from "../error/errorBase";
import Comentario from "../models/comentario";
import ComentarioRepository from "../repository/comentarioRepository";
import TestemunhoService from "./testemunhoService";

class ComentarioService {

    static save = async (novo: Comentario) => {
        return await ComentarioRepository.save(novo);
    }

    static findAll = async () => {
        return await ComentarioRepository.findAll();
    }

    static findById = async (id: number) => {
        return await ComentarioRepository.findById(id);
    }

    static update = async (id: number, comentario: Comentario) => {
        return await ComentarioRepository.update(id, comentario);
    }

    static delete = async (id: number, usuario: number) => {
        const comentario = await ComentarioRepository.findById(id);
        const testemunho = await TestemunhoService.findById(comentario!.testemunhoId);


        if (comentario && comentario.usuarioId === usuario) {
            return await ComentarioRepository.delete(id);
        } else if(testemunho?.autorId === usuario){
            return await ComentarioRepository.delete(id)
        } 
        else {
            throw new ErrorBase("autoridade invalida!");
        }

    }

}

export default ComentarioService;