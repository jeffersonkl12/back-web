import jwt from "jsonwebtoken";
import Express from "express";
import { error } from "console";
import ErrorBase from "../error/errorBase";
import { verificaToken } from "../utilities/token";
import TokenError from "../error/tokenError";


const authenticationRouter = Express.Router();

authenticationRouter.use("/", (req, res, next) => {

    if (!req.headers.authorization) {
        throw new ErrorBase("usuairo nao autenticado!");
    }

    try {

        const token = req.headers.authorization.split(" ")[1];

        if (token && verificaToken(token)) {
            next();
        }

    } catch (e) {
        
        const error  = e instanceof Error ? e.message:  "algo inesperado ocorreu!";

        if(error === "invalid signature"){
            throw new TokenError("token invalido!");
        }else{
            throw new ErrorBase(error);
        }
    }
});

export default authenticationRouter;
