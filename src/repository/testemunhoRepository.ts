import Testemunho from "../models/testemunho";
import prisma from "../database/database";

class TestemunhoRepository {

    static save = async (novo: Testemunho) => {
        return await prisma.testemunho.create({ data: novo });
    }

    static findAll = async () => {
        return await prisma.testemunho.findMany();
    }

    static findById = async (id: number) => {
        return await prisma.testemunho.findUnique({
            where: {
                id: id
            }
        });
    }

    static update = async (id: number, testemunho: Testemunho) => {
        return await prisma.testemunho.update({
            data: testemunho,
            where: {
                id: id
            }
        });
    }

    static delete = async (id: number) => {
        return await prisma.testemunho.delete({
            where: {
                id: id
            }
        })
    }
}

export default TestemunhoRepository;