import s from './Main.module.scss'
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.ts";
import {NewsList} from "../../components/NewsList/NewsList.tsx";
import {Skeleton} from "../../components/Skeleton/Skeleton.tsx";
import {NewsBanner} from "../../components/NewsBanner/NewsBanner.tsx";

export const Main = () => {
    const [news, setNews] = useState<ArticleFromServer[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true)
                const response = await getNews()
                setNews(response?.news)
                setIsLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        fetchNews()
    }, [])

    return (
        <main className={s.main}>
            {news?.length > 0 && isLoading ? <NewsBanner banner={news[0]}/> : <Skeleton type={'banner'} count={1}/>}
            {news?.length > 0 && isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10}/>}
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