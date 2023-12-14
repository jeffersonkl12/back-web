import Usuario from "../models/usuario";
import prisma from "../database/database";
import { Prisma } from "@prisma/client";
import CredentialErros from "../error/credentialsError";
import excluirCampos from "../utilities/excluirCampos";

class UsuarioRepository {

    static save = async (novo: Usuario) => {
        try {
            return await prisma.usuario.create({
                data: novo
            });
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {

                if (e.code === "P2002") {
                    console.log(e);
                    throw e;
                }
            }

            throw e;
        }

    }

    static findAll = async () => {
        return await prisma.usuario.findMany();
    }

    static findById = async (id: number) => {
        return await prisma.usuario.findUnique({
            where: {
                id: id
            }
        });
    }

    static update = async (id: number, usuario: Usuario) => {
        return await prisma.usuario.update({
            data: usuario,
            where: {
                id: id
            }
        });
    }

    static deleteById = async (id: number) => {
        return await prisma.usuario.delete({
            where: {
                id: id
            }
        });
    }

    static existUsuario = async (email: string, senha: string) => {
        return await prisma.usuario.findUnique({
            where: {
                email: email,
                senha: senha
            }
        });
    };

    static findUsuarioByEmail = async (email: string) => {
        return await prisma.usuario.findUnique({
            where: {
                email: email
            }
        });
    };

    static findUsuarioByEmailAndSenha = async (email: string, senha: string) => {
        return await prisma.usuario.findUnique({
            where: {
                email: email,
                senha: senha
            },
            select: excluirCampos("Usuario",["senha"])
        });
    }
}

export default UsuarioRepository;




