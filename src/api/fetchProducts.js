import axios from "axios";
import { API_BASE_URL, API_URLS } from "./urls"


export const getAllProducts = async (id,typeId)=>{
    let url = API_BASE_URL + API_URLS.GET_PRODUCTS + `?categoryId=${id}`;
    if(typeId){
        url = url + `&typeId=${typeId}`;
    }

    try{
        const fetchedItems = await axios(url,{
            method:"GET"
        });
        return fetchedItems?.data;
    }
    catch(err){
        console.error(err);
    }
}

export const getProductBySlug = async (slug)=>{
    const url = API_BASE_URL + API_URLS.GET_PRODUCTS + `?slug=${slug}`;
    try{
        const fetchedItems = await axios(url,{
            method:"GET",
        });
        return fetchedItems?.data?.[0];
    }
    catch(err){
        console.error(err);
    }
}