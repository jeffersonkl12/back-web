import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SEGREDO = process.env.SEGREDO || "segredo";


export type campoJson = {
    iss?: string,
    sub: string,
    exp?: number | string,
    aud?: string
}


export const gerarToken = ({
    iss = "api-testemunha",
    sub,
    exp = (new Date().getTime() + 86400000),
    aud = "usuario"
}: campoJson) => {

    return jwt.sign({
        algorithm: "HS256",
        issuer: iss,
        subject: sub,
        expiresIn: exp,
        audience: aud,
    }, SEGREDO);

}

export const decodeToken = (token: string) => {
    return jwt.decode(token);
}

export const verificaToken = (token: string) => {
    return jwt.verify(token, SEGREDO);
}