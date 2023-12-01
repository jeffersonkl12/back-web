class ErrorBase extends Error {

    menssagem: string;


    constructor(menssagem: string) {
        super(menssagem);

        this.menssagem = menssagem;

        Error.captureStackTrace(this, this.constructor);

    }

}

export default ErrorBase;