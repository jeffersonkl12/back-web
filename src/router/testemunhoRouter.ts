import Express from "express";
import TestemunhoService from "../service/testemunhoService";
import ErrorBase from "../error/errorBase";
import TestemunhoRepository from "../repository/testemunhoRepository";
import Testemunho from "../models/testemunho";

const testemuhoRouter = Express.Router();

testemuhoRouter.get("/", async (req, res, next) => {

    try {
        const testemunhos = await TestemunhoService.findAll();
        res.json(testemunhos);
    } catch (e) {
        next(e);
    }

});

testemuhoRouter.get("/filtro", async (req, res, next) => {
    const { page, size } = req.query;
    let auxPage, auxSize;

    try {

        if (page && typeof page === "string") {
            auxPage = parseInt(page);
        } else {
            throw new ErrorBase("params invalido!");
        }

        if (size && typeof size === "string") {
            auxSize = parseInt(size);
        } else {
            throw new ErrorBase("params invalidos!");
        }

        const testemunhos = await TestemunhoService.filtro(auxPage, auxSize);
        res.json(testemunhos);
    } catch (e) {
        next(e);
    }

});

testemuhoRouter.get("/quantidade", async (req,res,next) => {

    try{
        const count = await TestemunhoService.quantidade();
        res.json({qtd: count});
    }catch(e){
        next(e);
    }

});

testemuhoRouter.get("/:id", async (req, res, next) => {

    const id = parseInt(req.params.id);

    try {
        const testemunhoId = await TestemunhoRepository.findById(id);
        res.json(testemunhoId);
    } catch (e) {
        next(e);
    }
});

testemuhoRouter.post("/", async (req, res, next) => {
    const testemunho: Testemunho = req.body;

    try {
        const testemunhoSave = await TestemunhoRepository.save(testemunho);
        res.json(testemunhoSave);
    } catch (e) {
        next(e);
    }
});

testemuhoRouter.put("/:id", async (req, res, next) => {

    const id = parseInt(req.params.id);
    const testemunho: Testemunho = req.body;

    try {
        const testemunhoUpdate = await TestemunhoService.update(id, testemunho);
        res.json(testemunhoUpdate);
    } catch (e) {
        next(e);
    }
});

testemuhoRouter.delete("/:id", async (req, res, next) => {

    const id = parseInt(req.params.id);

    try {
        const testemunho = await TestemunhoService.delete(id);
        res.json(testemunho);
    } catch (e) {
        next(e);
    }
});

export default testemuhoRouter;