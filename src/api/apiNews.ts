import axios from "axios";
import {ArticleFromServer} from "../pages/Main/Main.tsx";

export const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;
export const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// export const getNews = async ({currentPage = 1, pageSize = 10, category, keywords}: GetNewsProps) => {
export const getNews = async (params?: GetNewsProps): Promise<{ news: ArticleFromServer[] }> => {
    const defaultParams: GetNewsProps = {
        currentPage: 1,
        pageSize: 10,
        category: null,
        keywords: ''
    };

    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                apiKey: API_KEY,
                ...defaultParams,
                ...params,
            },
        });

        return { news: response.data.news || [] };
    } catch (error) {
        throw new Error("Ошибка при загрузке новостей: " + error as string);
    }
};

export const getCategories = async (): Promise<{ categories: string[] }> => {
    try {
        const response = await axios.get(`${BASE_URL}/available/categories`, {
                params: {apiKey: API_KEY},
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export type GetNewsProps = {
    currentPage: number;
    pageSize: number;
    category: string | null;
    keywords: string
}