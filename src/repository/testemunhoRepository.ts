import Testemunho from "../models/testemunho";
import prisma from "../database/database";
import { prismaExclude } from "../database/prismaExlucde";
import Usuario from "../models/usuario";
import excluirCampos from "../utilities/excluirCampos";

class TestemunhoRepository {

    static save = async (novo: Testemunho) => {
        return await prisma.testemunho.create({
            data: {
                conteudo: novo.conteudo,
                titulo: novo.titulo,
                dataCriacao: novo.dataCriacao,
                autor: {
                    connect: {
                        id: novo.autorId
                    }
                }
            }
        });
    }

    static findAll = async () => {
        return await prisma.testemunho.findMany();
    }

    static findById = async (id: number) => {
        return await prisma.testemunho.findUnique({
            where: {
                id: id
            },
            include: {
                autor: {
                    select: excluirCampos("Usuario",["senha"])
                },
                comentarios: {
                    include: {
                        autor: {
                            select: excluirCampos("Usuario",["senha"])
                        },
                        outroComentarios: true,
                        likes: true
                    }
                }
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

    static filtro = async (page: number, size: number) => {
        return await prisma.testemunho.findMany({
            skip: page,
            take: size,
            include: {
                autor: true
            }
        });


    }

    static quantidade = async () => {
        return await prisma.testemunho.count();
    }
}




export default TestemunhoRepository;