import ErrorBase from "../error/errorBase";
import { gerarToken } from "../utilities/token";
import UsuarioService from "./usuarioService";


const loginService = async (email: string, senha: string) => {
    const usuario = await UsuarioService.findUsuarioByEmail(email);

    if (usuario) {
        const token = gerarToken({ sub: usuario.id.toString() });

        return token;
    }


    throw new ErrorBase("credencial invalido!");


};

export default loginService;