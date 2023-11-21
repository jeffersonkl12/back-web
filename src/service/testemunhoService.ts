import Testemunho from "../models/testemunho";
import TestemunhoRepository from "../repository/testemunhoRepository";

class TestemunhoService {

    static save = async (novo: Testemunho) => {
        return await TestemunhoRepository.save(novo);
    }

    static findAll = async () => {
        return await TestemunhoRepository.findAll();
    }

    static findById = async (id: number) => {
        return await TestemunhoRepository.findById(id);
    }

    static update = async (id: number, testemunho: Testemunho) => {
        return await TestemunhoRepository.update(id, testemunho);
    }

    static delete = async (id: number) => {
        return await TestemunhoRepository.delete(id);
    }

}

export default TestemunhoService;