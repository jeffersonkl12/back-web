import Like from "../models/like";
import LikeRepository from "../repository/likeRepository";
import TestemunhoRepository from "../repository/testemunhoRepository";

class LikeService {

    static save = async (novo: Like) => {
        return await LikeRepository.save(novo);
    }

    static findAll = async () => {
        return await LikeRepository.findAll();
    }

    static findById = async (id: number) => {
        return await LikeRepository.findById(id);
    }

    static update = async (id: number, like: Like) => {
        return await LikeRepository.update(id, like);
    }

    static delete = async (id: number) => {
        return await TestemunhoRepository.delete(id);
    }

}

export default LikeService;