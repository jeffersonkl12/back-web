import Express from "express";
import UsuarioService from "../service/usuarioService";
import { gerarToken } from "../utilities/token";
import ErrorBase from "../error/errorBase";

const loginRouter = Express.Router();

loginRouter.post("/", async (req, res) => {

    const [email, senha] = atob(req.headers.authorization!.split(" ")[1]).split(":");
    
});

export default loginRouter;