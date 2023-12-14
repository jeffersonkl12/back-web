import Comentario from "../models/comentario";
import prisma from "../database/database";
import excluirCampos from "../utilities/excluirCampos";

class ComentarioRepository {

    static save = async (novo: Comentario) => {
        return prisma.comentario.create({
            data: {
                conteudo: novo.conteudo,
                autor: {
                    connect:{
                        id: novo.usuarioId
                    }
                },
                testemunho:{
                    connect:{
                        id: novo.testemunhoId
                    }
                }
            },
            include: {
                autor: excluirCampos("Usuario",["senha"])
            }  
        });
    }

    static findAll = async () => {
        return await prisma.comentario.findMany();
    }

    static findById = async (id: number) => {
        return await prisma.comentario.findUnique({
            where: {
                id: id,
            },
            include: {
                autor: {
                    select: excluirCampos("Usuario",["senha"])
                },
                likes: true,
                outroComentarios: true
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