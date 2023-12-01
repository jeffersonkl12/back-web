import Express from "express";
import LikeService from "../service/likeService";
import ErrorBase from "../error/errorBase";
import Like from "../models/like";

const likeRouter = Express.Router();

likeRouter.get("/", async (req,res,next) =>{

    try{
        const likes = await LikeService.findAll();
        res.json(likes);
    }catch(e){
        next(e);
    }
});

likeRouter.get("/:id", async (req,res,next) =>{

    const id = parseInt(req.params.id);

    try{
        const like = await LikeService.findById(id);
        res.json(like);
    }catch(e){
        next(e);
    }
});

likeRouter.post("/", async (req,res, next) =>{

    const like: Like = req.body;

    try{
        const likeSave = await LikeService.save(like);
        res.json(likeSave);
    }catch(e){
        next(e);
    }
});

likeRouter.put("/:id", async (req,res,next) =>{

    const id = await parseInt(req.params.id);
    const like: Like = req.body;

    try{
        const likeUPdate = await LikeService.update(id,like);
        res.json(like);
    }catch(e){
        next(e);
    }
});

likeRouter.delete("/:id", async (req,res,next) =>{

    const id = parseInt(req.params.id);

    try{
        const like = await LikeService.delete(id);
    }catch(e){
        next(e);
    }
});

export default likeRouter;