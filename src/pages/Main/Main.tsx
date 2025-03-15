import s from './Main.module.scss'
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.ts";
import {NewsList} from "../../components/NewsList/NewsList.tsx";

export const Main = () => {
    const [news, setNews] = useState<ArticleFromServer[]>([])
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews()
                setNews(response?.news)
            } catch (error) {
                console.error(error);
            }
        }
        fetchNews()
    }, [])

    return (
        <main className={s.main}>
            {news?.length > 0 ? <NewsList news={news}/> : 'No news found'}
        </main>
    );
};

export type ArticleFromServer = {
    author: string;
    category: string[];
    description: string;
    id: string;
    image: string | undefined;
    language: string;
    published: string;
    title: string;
    url: string;
};