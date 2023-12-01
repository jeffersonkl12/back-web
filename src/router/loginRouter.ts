import Express from "express";
import UsuarioService from "../service/usuarioService";
import { gerarToken } from "../utilities/token";
import ErrorBase from "../error/errorBase";
import loginService from "../service/loginService";

const loginRouter = Express.Router();

loginRouter.post("/", async (req, res) => {

    console.log("token");
    const [email, senha] = atob(req.headers.authorization!.split(" ")[1]).split(":");
    
    const token = await loginService(email,senha);

    res.json({token: token});
});

export default loginRouter;