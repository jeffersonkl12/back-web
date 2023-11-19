import Comentario from "../models/comentario";
import prisma from "../database/database";

class ComentarioRepository {

    static save = async (novo: Comentario) => {
        return prisma.comentario.create({
            data: novo
        });
    }

    static findAll = async () => {
        return await prisma.comentario.findMany();
    }

    static findById = async (id: number) => {
        return await prisma.comentario.findUnique({
            where: {
                id: id
            }
        });
    }

    static update = async (id: number, comentario: Comentario) => {
        return await prisma.comentario.update({
            data: comentario,
            where: {
                id: id
            }
        });
    }

    static delete = async (id: number) => {
        return await prisma.comentario.delete({
            where: {
                id: id
            }
        });
    }
}

export default ComentarioRepository;