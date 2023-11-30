import CredentialErros from "../error/credentialsError";
import Usuario from "../models/usuario";
import UsuarioService from "./usuarioService";

const cadastroService = async (nome: string, email: string, senha: string) => {

    if (email && senha && nome) {
        const usuario = await UsuarioService.save(new Usuario(nome, email, senha));
        if (usuario) {
            return usuario;
        }

    }
};

export default cadastroService;