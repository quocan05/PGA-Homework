import axios from "axios";
import { ISignUpParams } from "../modules/auth/components/SignUpForm";

export const getCountryAPI = async () => {

    try {
        // Prepare the URL with query parameters
        
        const url = `http://api.training.div3.pgtest.co/api/v1/location`;

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        
        throw error; // Throw the error for handling in the caller function
    }
}

export const getStateByCountryAPI = async (id: string) => {
    try {
        // Prepare the URL with query parameters
        
        const url = `http://api.training.div3.pgtest.co/api/v1/location`;

        const response = await axios.get(url+`?pid=${id}`);
        return response.data;
    } catch (error) {
        
        throw error; // Throw the error for handling in the caller function
    }
}
