import Express from "express";
import UsuarioService from "../service/usuarioService";
import ErrorBase from "../error/errorBase";
import Usuario from "../models/usuario";
import { decodeToken } from "../utilities/token";
import { JwtPayload } from "jsonwebtoken";

const usuairoRouter = Express.Router();

usuairoRouter.get("/", async (req, res, next) => {

    try {
        const usuarios = await UsuarioService.findAll();
        res.json(usuarios);
    } catch (e) {
        next(e);
    }
});

usuairoRouter.get("/:id(\\bid\\b)", async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const usuario = await UsuarioService.findById(id);
        res.json(usuario);
    } catch (e) {
        next(e);
    }
});

usuairoRouter.post("/", async (req, res, next) => {

    const usuario: Usuario = req.body;

    try {
        const usuarioSave = await UsuarioService.save(usuario);
        res.json(usuarioSave);
    } catch (e) {
        next(e);
    }
});

usuairoRouter.put("/:id", async (req, res, next) => {

    const id = parseInt(req.params.id);
    const usuario: Usuario = req.body;

    try {
        const usuarioUpdate = await UsuarioService.update(id, usuario);
        res.json(usuarioUpdate);
    } catch (e) {
        next(e);
    }

});

usuairoRouter.delete("/:id", async (req, res, next) => {

    const id = parseInt(req.params.id);

    try {
        const usuario = await UsuarioService.delete(id);
        res.json(usuario);
    } catch (e) {
        next(e);
    }

});

usuairoRouter.get("/perfil", async (req, res, next) => {
    try {

        if (!req.headers.authorization) {
            throw new ErrorBase("token vazio!");
        }
        
        const token = req.headers.authorization.split(" ")[1];
        const tokenCode = decodeToken(token);
        const id = parseInt((tokenCode as JwtPayload).subject);
        const usuario = await UsuarioService.findById(id);
  
        res.json(usuario);
    } catch (e) {
        next(e);
    }
});

export default usuairoRouter;


