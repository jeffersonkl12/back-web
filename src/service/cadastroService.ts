import { Prisma } from "@prisma/client";
import CredentialErros from "../error/credentialsError";
import Usuario from "../models/usuario";
import loginService from "./loginService";
import UsuarioService from "./usuarioService";

const cadastroService = async (nome: string, email: string, senha: string) => {

    if (email && senha && nome) {
        try {
            const usuario = await UsuarioService.save(new Usuario(nome, email, senha));
            if (usuario) {
                return usuario;
            }
        } catch (e) {
            if(e instanceof Prisma.PrismaClientKnownRequestError){
                if(e.code === "P2002"){
                    throw new CredentialErros("email ja existente!");
                }
            }
        }

    } else {
        throw new CredentialErros("credentials invalidas!");
    }
};

export default cadastroService;