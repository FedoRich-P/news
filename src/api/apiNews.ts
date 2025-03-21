import axios from 'axios';
import { CategoriesApiResponse, INews, ParamsType } from '../interfaces/interfaces.ts';

export const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;
export const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (params: ParamsType): Promise<NewsApiResponse> => {
    try {
        const {
            currentPage = 1,
            pageSize=  10,
            category= null,
            keywords= ''
        } = params || {}
        const response = await axios.get<NewsApiResponse>(`${BASE_URL}/search`, {
            params: {
                apiKey: API_KEY,
                currentPage,
                pageSize,
                category,
                keywords
            },
        });
        return  response.data ;
    } catch (error) {
        // throw new Error("Ошибка при загрузке новостей: " + error as string);
        console.log(error);
        return {news: [], page: 1, status: Status.Error}
    }
};

export const getLatestNews = async (): Promise<NewsApiResponse> => {
    try {
        const response = await axios.get<NewsApiResponse>(`${BASE_URL}/latest-news`, {
              params: {apiKey: API_KEY},
          },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return {news: [], page: 1, status: Status.Error}
    }
};

export const getCategories = async (): Promise<CategoriesApiResponse> => {
    try {
        const response = await axios.get<CategoriesApiResponse>(`${BASE_URL}/available/categories`, {
                params: {apiKey: API_KEY},
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return {categories: [], description: '', status: Status.Error}
    }
};

// export type GetNewsProps = {
//     currentPage: number;
//     pageSize?: number;
//     category: string | null;
//     keywords: string
// }

export type NewsApiResponse = {
    news: INews[] ;
    page: number;
    status: Status;
};

enum Status {
    Error = 'error',
    Ok = 'ok'
}

// export const getNews = async ({currentPage=1, pageSize=10, category, keywords}: IFilters): Promise<NewsApiResponse> => {
// const defaultParams: IFilters = {
//     currentPage: 1,
//     pageSize: 10,
//     category: null,
//     keywords: ''
// };