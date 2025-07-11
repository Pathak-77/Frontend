import axios from "axios";
import { API_BASE_URL, API_URLS } from "./urls";

export const fetchCategories = async()=> {
    const url = API_BASE_URL + API_URLS.GET_CATEGORIES;

    try{
        const fetchedItems = await axios(url,{
            method:'GET'
        });
        return fetchedItems?.data;
    }
    catch(e){
        console.log(e);
    }
}