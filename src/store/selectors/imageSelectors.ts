import {selector} from "recoil";
import axios from "axios";
import {searchState} from "@/store/atoms/searchState.ts";
import {pageState} from "@/store/atoms/pageState.ts";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const PER_PAGE = import.meta.env.VITE_APP_PER_PAGE;

export const imageData =  selector({
    key:"imageData",
    get: async ({get}) => {
        const searchValue = get(searchState);
        const pageValue = get(pageState);

        // API 호출
        try{
            const res =  await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`);
            //console.log(res)
            return res.data.results;
            //if(res.status === 200) setImgUrls(res.data.results);
        }catch(e){
            console.error(e);
            throw e;
        }
    }
})