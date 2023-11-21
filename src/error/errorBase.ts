class ErrorBase extends Error {

    menssagem: string;
    data: Date;


    constructor(menssagem: string) {
        super(menssagem);

        this.menssagem = menssagem;
        this.data = new Date();

        Error.captureStackTrace(this, this.constructor);

    }

}

export default ErrorBase;