import Express from "express";
import UsuarioService from "../service/usuarioService";
import Usuario from "../models/usuario";
import cadastroService from "../service/cadastroService";
import { error } from "console";
import CredentialErros from "../error/credentialsError";

const cadastroRouter = Express.Router();

cadastroRouter.post("/", async (req, res,next) => {
    const { email, senha, nome } = req.body;
    try {
        const usuario = await cadastroService(nome, email, senha);

        res.status(201).send("cadastro realizado com sucesso!");
    } catch (e) {
        next(e);
    }

});

export default cadastroRouter;