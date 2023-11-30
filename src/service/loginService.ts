import ErrorBase from "../error/errorBase";
import { gerarToken } from "../utilities/token";
import UsuarioService from "./usuarioService";


const loginService = async (email: string, senha: string) =>{
    const usuario = await UsuarioService.existUsuario(email, senha);
    try {
        if (usuario) {
            const token = gerarToken({ sub: usuario.id.toString() });

            return token;
        }
    } catch (e) {
        const error = e instanceof Error ? e.message : "algo inesperado aconteceu!";
        throw new ErrorBase(error);
    }

};