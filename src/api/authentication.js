import axios from "axios";

export const loginAPI = async (body) => {
    const url = '/api/auth/login'; 
    try {
        const response = await axios(url, {
            method: "POST",
            data: body,
        });
        return response?.data;
    } catch (err) {
        throw new Error(err);
    }
}

export const registerAPI = async (body) => {
    const url = '/api/auth/register'; 
    try {
        const response = await axios({
            method: "POST",
            url: url, 
            data: body,
        });
        return response?.data;
    } catch (err) {
        throw new Error(err);
    }
}

export const verifyAPI = async (body) => {
    const url = '/api/auth/verify'; 
    try {
        const response = await axios(url, {
            method: "POST",
            data: body,
        });
        return response?.data;
    } catch (err) {
        throw new Error(err);
    }
}
