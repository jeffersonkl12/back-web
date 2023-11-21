import Express from "express";
import UsuarioService from "../service/usuarioService";
import ErrorBase from "../error/errorBase";
import Usuario from "../models/usuario";

const usuairoRouter = Express.Router();

usuairoRouter.get("/", async (req, res) => {

    try {
        const usuarios = await UsuarioService.findAll();
        res.json(usuarios);
    } catch (ex) {
        throw new ErrorBase("algo errado aconteceu!");
    }
});

usuairoRouter.get("/:id", async (req, res) => {

    const id = parseInt(req.params.id);

    try {
        const usuario = await UsuarioService.findById(id);
        res.json(usuario);
    } catch (ex) {
        throw new ErrorBase("algo errado aconteceu!");
    }
});

usuairoRouter.post("/", async (req, res) => {

    const usuario: Usuario = req.body;

    try {
        const usuarioSave = await UsuarioService.save(usuario);
        res.json(usuarioSave);
    } catch (ex) {
        throw new ErrorBase("algo errado aconteceu!");
    }
});

usuairoRouter.put("/:id", async (req, res) => {

    const id = parseInt(req.params.id);
    const usuario: Usuario = req.body;

    try {
        const usuarioUpdate = await UsuarioService.update(id, usuario);
        res.json(usuarioUpdate);
    } catch (ex) {
        throw new ErrorBase("algo errado aconteceu!");
    }

});

usuairoRouter.delete("/:id", async (req, res) => {

    const id = parseInt(req.params.id);

    try {
        const usuario = await UsuarioService.delete(id);
        res.json(usuario);
    } catch (ex) {
        throw new ErrorBase("algo errado aconteceu!");
    }

});

export default usuairoRouter;


