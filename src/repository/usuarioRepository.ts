import Usuario from "../models/usuario";
import prisma from "../database/database";

class UsuarioRepository {

    static save = async (novo: Usuario) => {
        return await prisma.usuario.create({
            data: novo
        });
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
}

export default UsuarioRepository;




