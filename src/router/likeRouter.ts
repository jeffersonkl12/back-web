import Express from "express";
import LikeService from "../service/likeService";
import ErrorBase from "../error/errorBase";
import Like from "../models/like";

const likeRouter = Express.Router();

likeRouter.get("/", async (req,res) =>{

    try{
        const likes = await LikeService.findAll();
        res.json(likes);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

likeRouter.get("/:id", async (req,res) =>{

    const id = parseInt(req.params.id);

    try{
        const like = await LikeService.findById(id);
        res.json(like);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

likeRouter.post("/", async (req,res) =>{

    const like: Like = req.body;

    try{
        const likeSave = await LikeService.save(like);
        res.json(likeSave);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

likeRouter.put("/:id", async (req,res) =>{

    const id = await parseInt(req.params.id);
    const like: Like = req.body;

    try{
        const likeUPdate = await LikeService.update(id,like);
        res.json(like);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

likeRouter.delete("/:id", async (req,res) =>{

    const id = parseInt(req.params.id);

    try{
        const like = await LikeService.delete(id);
    }catch(ex){
        throw new ErrorBase("algo inesperado aconteceu!");
    }
});

export default likeRouter;