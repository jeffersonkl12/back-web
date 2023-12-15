import { Prisma } from "@prisma/client";
import CredentialErros from "../error/credentialsError";
import Usuario from "../models/usuario";
import loginService from "./loginService";
import UsuarioService from "./usuarioService";

const cadastroService = async (usuario: Usuario ) => {

    if (usuario && usuario.nome && usuario.email && usuario.senha) {
        try {
            const novoUsuario = await UsuarioService.save(usuario);
            if (novoUsuario) {
                return novoUsuario;
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