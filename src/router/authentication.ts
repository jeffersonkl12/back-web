import jwt from "jsonwebtoken";
import express from "express";
import dotenv from "dotenv";
import { error } from "console";
import ErrorBase from "../error/errorBase";

dotenv.config();
const SEGREDO = process.env.SEGREDO!;

const authenticationRouter = express.Router();

authenticationRouter.use("/gerar", (req, res) => {
    const token = jwt.sign({ usuario: "usuario" }, "segredo");
    res.json({ token: token });
});


authenticationRouter.use("/", (req, res, next) => {

    if (!req.headers.authorization) {
        throw new ErrorBase("usuairo nao autenticado!");
    }

    try {

        const token = req.headers.authorization.split(" ")[1];

        if (token && jwt.verify(token, SEGREDO)) {
            next();
        }
    } catch (e) {
        
        const error  = e instanceof Error ? e.message: "algo inesperado ocorreu!";

        throw new ErrorBase(error);
    }
});

export default authenticationRouter;
