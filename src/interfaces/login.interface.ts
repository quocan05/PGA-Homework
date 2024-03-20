export interface PropsLogin {
    onLogin(values: ILoginParams): void;
    loading: boolean;
    errMsg: string;
  }
  
  export interface ILoginParams {
    email: string;
    password: string;
    //remember: boolean
  }
  
  export interface ILoginValidation {
    email: string;
    password: string;
  }