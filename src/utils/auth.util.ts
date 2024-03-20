import { ILoginParams, ILoginValidation } from "../interfaces/login.interface";

export const validEmailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = (email: string) => {
    if (!validEmailRegex.test(email)) {
        return 'emailInvalid'
    }
    return '';
}

const validatePassword = (password: string) => {
    if (!password) {
        return 'passwordRequire'
    }
    
    return '';
};


export const validateLogin = (values: ILoginParams): ILoginValidation => {
    return {
        email: validateEmail(values.email),
        password: validatePassword(values.password)
    };

};

export const validLogin = (values: ILoginValidation) => {
    return !values.email && !values.password;
};

