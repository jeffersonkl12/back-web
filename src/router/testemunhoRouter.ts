import Express from "express";
import TestemunhoService from "../service/testemunhoService";
import ErrorBase from "../error/errorBase";
import TestemunhoRepository from "../repository/testemunhoRepository";
import Testemunho from "../models/testemunho";

const testemuhoRouter = Express.Router();

testemuhoRouter.get("/",async (req,res) =>{

    try{
        const testemunhos = await TestemunhoService.findAll();
        res.json(testemunhos);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }

});

testemuhoRouter.get("/:id", async (req,res) =>{

    const id = parseInt(req.params.id);

    try{
        const testemunhoId = await TestemunhoRepository.findById(id);
        res.json(testemunhoId);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

testemuhoRouter.post("/", async (req,res) =>{
    const testemunho: Testemunho = req.body;

    try{
        const testemunhoSave = await TestemunhoRepository.save(testemunho);
        res.json(testemunhoSave);
    }catch(ex: any){
        throw new ErrorBase(ex.message);
    }
});

testemuhoRouter.put("/:id", async (req,res) =>{
    
    const id = parseInt(req.params.id);
    const testemunho: Testemunho = req.body;

    try{
        const testemunhoUpdate = await TestemunhoService.update(id,testemunho);
        res.json(testemunhoUpdate);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

testemuhoRouter.delete("/:id", async (req,res)=>{

    const id = parseInt(req.params.id);

    try{
        const testemunho = await TestemunhoService.delete(id);
        res.json(testemunho);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

export default testemuhoRouter;