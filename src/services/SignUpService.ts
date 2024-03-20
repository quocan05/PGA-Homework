import axios from "axios";
import { ISignUpParams } from "../interfaces/signup.interface";

export const SignUpAPI = async (params: ISignUpParams) => {
    try {
        const res = await axios.post('http://api.training.div3.pgtest.co/api/v1/auth/register', params);
        return res.data;
    } catch (error) {
        throw error
    }
}