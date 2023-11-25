import Express from "express";
import UsuarioService from "../service/usuarioService";
import { gerarToken } from "../utilities/token";
import ErrorBase from "../error/errorBase";

const loginRouter = Express.Router();

loginRouter.post("/", async (req, res) => {

    const [email, senha] = atob(req.headers.authorization!.split(" ")[1]).split(":");
    const usuario = await UsuarioService.existUsuario(email, senha);
    try {
        if (usuario) {
            const token = gerarToken({ sub: usuario.id.toString() });
            res.json({ token: token });
        } else {
            res.status(401).send("credenciais invalidas!");
        }
    } catch (e) {
        const error = e instanceof Error ? e.message : "algo inesperaod aconteceu!";
        throw new ErrorBase(error);
    }
});

export default loginRouter;