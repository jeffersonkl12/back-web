import Like from "../models/like";
import prisma from "../database/database";

class LikeRepository {

    static save = async (novo: Like) => {
        return await prisma.like.create({ data: novo });
    }

    static findAll = async () => {
        return await prisma.like.findMany();
    }

    static findById = async (id: number) => {
        return await prisma.like.findUnique({
            where: {
                id: id
            }
        });
    }

    static update = async (id: number, like: Like) => {
        return await prisma.like.update({
            data: like,
            where: {
                id: id
            }
        });
    }

    static delete = async (id: number) => {
        return await prisma.like.delete({
            where: {
                id: id
            }
        });
    }
}

export default LikeRepository;