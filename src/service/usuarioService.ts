import Usuario from "../models/usuario";
import UsuarioRepository from "../repository/usuarioRepository";

class UsuarioService {

    static save = async (novo: Usuario) => {
        return await UsuarioRepository.save(novo);
    }

    static findAll = async () => {
        return await UsuarioRepository.findAll();
    }

    static findById = async (id: number) => {
        return await UsuarioRepository.findById(id);
    }

    static update = async (id: number, usuario: Usuario) => {
        return await UsuarioRepository.update(id, usuario);
    }

    static delete = async (id: number) => {
        return await UsuarioRepository.deleteById(id);
    }

    static existUsuario = async (email: string, senha: string) => {
        return UsuarioRepository.existUsuario(email, senha);
    }

    static findUsuarioByEmail = async (email: string) => {
        return UsuarioRepository.findUsuarioByEmail(email);
    }

    static findUsuarioByEmailAndSenha = async (email: string, senha: string) => {
        return UsuarioRepository.findUsuarioByEmailAndSenha(email,senha);
    }
}

export default UsuarioService;