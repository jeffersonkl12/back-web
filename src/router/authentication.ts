import jwt from "jsonwebtoken";
import Express from "express";
import { error } from "console";
import ErrorBase from "../error/errorBase";
import { verificaToken } from "../utilities/token";


const authenticationRouter = Express.Router();

authenticationRouter.use("/", (req, res, next) => {

    if (!req.headers.authorization) {
        throw new ErrorBase("usuairo nao autenticado!");
    }

    try {

        const token = req.headers.authorization.split(" ")[1];

        if (token && verificaToken(token)) {
            next();
        }else{
            res.status(401).send("nao autorizado!");
        }
    } catch (e) {
        
        const error  = e instanceof Error ? e.message: "algo inesperado ocorreu!";

        throw new ErrorBase(error);
    }
});

export default authenticationRouter;
