import express, { Request, Response, NextFunction } from 'express';
import usuairoRouter from "./router/usuarioRouter";
import testemuhoRouter from "./router/testemunhoRouter";
import likeRouter from "./router/likeRouter";
import comentarioRouter from "./router/comentarioRouter";

const app = express();

app.use(express.json());

app.use("/usuario",usuairoRouter);
app.use("/testemunho",testemuhoRouter);
app.use("/like",likeRouter);
app.use("/comentario",comentarioRouter);

app.use(async (err: Error,req: Request,res: Response,next: NextFunction)=>{
    console.log(err);
    res.status(500).send("algo deu errado!");
});

app.listen(8080,"127.0.0.1",()=>{
    console.log("servidor rodando!");
});