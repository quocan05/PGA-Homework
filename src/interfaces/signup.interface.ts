export type PropsSignUp = {
    onSignUp(values: ISignUpParams): void;
    loading: boolean;
    errMsg: string;
  };
  export interface ISignUpParams {
    email: string;
    password: string;
    repeatPassword: string;
    name: string;
    gender: string;
    region: string;
    state: string;
  }
  
  export interface IGenderParams {
    label: string;
    value: string;
  }
  

  
  export interface ISignUpValidation {
    email: string;
    password: string;
    repeatPassword: string;
    name: string;
    gender: string;
    region: string;
    state: string;
  }