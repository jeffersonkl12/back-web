import Express from "express";
import Comentario from "../models/comentario";
import ComentarioService from "../service/comentarioService";
import ErrorBase from "../error/errorBase";

const comentarioRouter = Express.Router();

comentarioRouter.get("/", async (req,res) =>{

    try{
        const comentario = await ComentarioService.findAll();
        res.json(comentario);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

comentarioRouter.get("/:id", async (req,res) =>{

    const id = parseInt(req.params.id);

    try{
        const comentario = await ComentarioService.findById(id);
        res.json(comentario);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

comentarioRouter.post("/", async (req,res) =>{

    const comentario: Comentario = req.body;

    try{
        const comentarioSave = await ComentarioService.save(comentario);
        res.json(comentario);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

comentarioRouter.put("/:id", async (req,res) =>{

    const id = parseInt(req.params.id);
    const comentario: Comentario = req.body; 

    try{
        const comentarioUpdate = await ComentarioService.update(id,comentario);
        res.json(comentarioUpdate);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

comentarioRouter.delete("/:id", async (req,res) =>{

    const id = parseInt(req.params.id);
    
    try{
        const comentario = await ComentarioService.delete(id);
        res.json(comentario);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

export default comentarioRouter;