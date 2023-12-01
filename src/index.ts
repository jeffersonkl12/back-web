import express, { Request, Response, NextFunction } from 'express';
import usuairoRouter from "./router/usuarioRouter";
import testemuhoRouter from "./router/testemunhoRouter";
import likeRouter from "./router/likeRouter";
import comentarioRouter from "./router/comentarioRouter";
import authenticationRouter from './router/authentication';
import loginRouter from './router/loginRouter';
import TokenError from './error/tokenError';
import cadastroRouter from './router/cadastroRouter';
import CredentialErros from './error/credentialsError';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", loginRouter);
app.use("/cadastro",cadastroRouter);
app.use(authenticationRouter);


app.use("/usuario", usuairoRouter);
app.use("/testemunho", testemuhoRouter);
app.use("/like", likeRouter);
app.use("/comentario", comentarioRouter);

app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof TokenError ||
        err instanceof CredentialErros) {
        res.status(401);
    } else {
        res.status(500);
    }

    res.json({
        message: err.message,
        data: new Date(),
        name: err.name
    });

});

app.listen(8080, "127.0.0.1", () => {
    console.log("servidor rodando!");
});