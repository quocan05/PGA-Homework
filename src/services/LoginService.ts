import axios from "axios"
import { ILoginParams } from "../interfaces/login.interface";

export const LoginAPI = async (params: ILoginParams) => {
    try {
        const res = await fetch('https://api.gearfocus.div4.pgtest.co/api/authentication/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
       
        const data = await res.json();
        return data;
    } catch (error) {
        throw error
    }
}