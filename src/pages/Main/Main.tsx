import s from './Main.module.scss'
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.ts";
import {NewsList} from "../../components/NewsList/NewsList.tsx";
import {Skeleton} from "../../components/Skeleton/Skeleton.tsx";
import {NewsBanner} from "../../components/NewsBanner/NewsBanner.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";

export const Main = () => {
    const [news, setNews] = useState<ArticleFromServer[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const totalPage = 10
    const pageSize = 10

    const fetchNews = async (currentPage: number) => {
        try {
            setIsLoading(true)
            const response = await getNews({currentPage, pageSize })
            setNews(response?.news)
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage])

    const handleNextPage = () => {
        if (currentPage < totalPage) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > totalPage) setCurrentPage(currentPage - 1);
    };

    const handlePageNumber = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <main className={s.main}>
            {news?.length > 0 && isLoading ? <NewsBanner banner={news[0]}/> : <Skeleton type={'banner'} count={1}/>}
            <Pagination totalPages={totalPage}
                        currentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePageNumber={handlePageNumber}
                        handlePrevPage={handlePrevPage} />
            {news?.length > 0 && isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10}/>}
            <Pagination totalPages={totalPage}
                        currentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePageNumber={handlePageNumber}
                        handlePrevPage={handlePrevPage} />
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