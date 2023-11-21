import Comentario from "../models/comentario";
import ComentarioRepository from "../repository/comentarioRepository";

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

    static delete = async (id: number) => {
        return await ComentarioRepository.delete(id);
    }

}

export default ComentarioService;