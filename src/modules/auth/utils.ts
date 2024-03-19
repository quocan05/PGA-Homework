import { ILoginParams, ILoginValidation } from "./components/LoginForm";
import { ISignUpParams, ISignUpValidation } from "./components/SignUpForm";

export const validEmailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = (email: string) => {
    if (!email) {
        return 'emailRequire'
    }
    if (!validEmailRegex.test(email)) {
        return 'emailInvalid'
    }
    return '';
}

const validatePassword = (password: string) => {
    if (!password) {
        return 'passwordRequire'
    }
    if (password.length < 4) {
        return 'minPasswordInvalid'
    }
    return '';
};

const validateRePassword = (password: string, repeatPassword: string) => {
    if (!repeatPassword) {
        return 'Please re-enter your password';
    }
    if (password !== repeatPassword) {
        return 'Passwords does not match';
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

