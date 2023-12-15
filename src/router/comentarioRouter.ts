import Express from "express";
import Comentario from "../models/comentario";
import ComentarioService from "../service/comentarioService";
import ErrorBase from "../error/errorBase";
import { decodeToken } from "../utilities/token";
import { JwtPayload } from "jsonwebtoken";

const comentarioRouter = Express.Router();

comentarioRouter.get("/", async (req, res, next) => {

    try {
        const comentario = await ComentarioService.findAll();
        res.json(comentario);
    } catch (e) {
        next(e);
    }
});

comentarioRouter.get("/:id", async (req, res, next) => {

    const id = parseInt(req.params.id);

    try {
        const comentario = await ComentarioService.findById(id);
        res.json(comentario);
    } catch (e) {
        next(e);
    }
});

comentarioRouter.post("/", async (req, res, next) => {

    const comentario: Comentario = req.body;

    try {
        const comentarioSave = await ComentarioService.save(comentario);
        res.json(comentarioSave);
    } catch (e) {
        next(e);
    }
});

comentarioRouter.put("/:id", async (req, res, next) => {

    const id = parseInt(req.params.id);
    const comentario: Comentario = req.body;

    try {
        const comentarioUpdate = await ComentarioService.update(id, comentario);
        res.json(comentarioUpdate);
    } catch (e) {
        next(e);
    }
});

comentarioRouter.delete("/:id", async (req, res, next) => {

    const id = parseInt(req.params.id);
    const token = req.headers.authorization!.split(" ")[1];
    console.log(token);

    try {
        const tokenDecode = decodeToken(token);
        const autorId = (tokenDecode as JwtPayload).subject;
        const comentario = await ComentarioService.delete(id, autorId);
        res.json(comentario);
    } catch (e) {
        next(e);
    }
});

export default comentarioRouter;