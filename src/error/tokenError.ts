import ErrorBase from "./errorBase";

class TokenError extends ErrorBase {

    constructor(message: string){
        super(message);

        Error.captureStackTrace(this, this.constructor);
    }

}

export default TokenError;