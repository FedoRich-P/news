import axios from "axios";

export const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;
export const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({currentPage = 1, pageSize = 10, category}: GetNewsProps) => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
                params: {
                    apiKey: API_KEY,
                    currentPage,
                    pageSize,
                    category,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const getCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/available/categories`, {
                params: {
                    apiKey: API_KEY,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

type GetNewsProps = {
    currentPage: number;
    pageSize: number;
    category: string | null;
}