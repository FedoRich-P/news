import axios from "axios";

export const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;
export const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({currentPage = 1, pageSize = 10}) => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
                params: {
                    apiKey: API_KEY,
                    currentPage,
                    pageSize,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
// export const getNews = async () => {
//     try {
//         return  await axios.get(`${BASE_URL}/latest-news`, {
//             params: {
//                 apiKey: API_KEY,
//             },
//         }).then(res => res.data);
//     } catch (error) {
//         console.error(error);
//     }
// }