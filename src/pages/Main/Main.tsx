import s from './Main.module.scss'
import {getCategories, getNews} from "../../api/apiNews.ts";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {Categories} from "../../components/Categories/Categories.tsx";
import {Search} from "../../components/Search/Search.tsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.ts";
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants.ts";
import {NewsBannerWithSkeleton} from "../../components/NewsBanner/NewsBanner.tsx";
import {NewsListWithSkeleton} from "../../components/NewsList/NewsList.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {useFilters} from "../../helpers/hooks/useFilters.ts";

export const Main = () => {
    const {filters, changeFilter} = useFilters({
        currentPage: 1,
        pageSize: PAGE_SIZE,
        category: null,
        keywords: '',
    });

    const debouncedKeyWords = useDebounce({value: filters.keywords, delay: 1500})

    const {data, error, isLoading} = useFetch({
        fetch: getNews,
        params: {
            ...filters,
            keywords: debouncedKeyWords,
        }
    })

    const {data: dataCategories} = useFetch<{ categories: string[] }>({fetch: getCategories});

    const handleNextPage = () => {
        if (filters.currentPage < TOTAL_PAGES) changeFilter('currentPage', filters.currentPage + 1);
    };
    const handlePrevPage = () => {
        if (filters.currentPage > TOTAL_PAGES) changeFilter('currentPage', filters.currentPage - 1);
    };
    const handlePageNumber = (pageNumber: number) => {
        changeFilter('currentPage', pageNumber);
    };

    return (
        <main className={s.main}>
            {dataCategories?.categories && (
                <Categories categories={dataCategories?.categories}
                            setSelectedCategory={(category) => changeFilter('category', category)}
                            selectedCategory={filters.category}
                />
            )}
            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
            <NewsBannerWithSkeleton isLoading={isLoading}
                                    banner={data?.news?.[0] || {
                                        title: "",
                                        author: "",
                                        published: "",
                                        image: undefined
                                    }}/>

            <Pagination totalPages={TOTAL_PAGES}
                        currentPage={filters.currentPage}
                        handleNextPage={handleNextPage}
                        handlePageNumber={handlePageNumber}
                        handlePrevPage={handlePrevPage}/>
            {error && <h2 style={{color: 'red'}}>{error.message}</h2>}
            <NewsListWithSkeleton isLoading={isLoading} news={data?.news ?? []}/>
            <Pagination totalPages={TOTAL_PAGES}
                        currentPage={filters.currentPage}
                        handleNextPage={handleNextPage}
                        handlePageNumber={handlePageNumber}
                        handlePrevPage={handlePrevPage}/>
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

// const [currentPage, setCurrentPage] = useState(1)
// const [selectedCategory, setSelectedCategory] = useState<string | null>('All')
// const [keywords, setKeywords] = useState('')

// const fetchNews = async (currentPage: number) => {
//     try {
//         setIsLoading(true)
//         setError(null)
//         const response = await getNews({
//             currentPage,
//             pageSize: PAGE_SIZE,
//             keywords: debouncedKeyWords,
//             category: selectedCategory === 'All' ? null : selectedCategory
//         })
//         setNews(response?.news)
//     } catch (error) {
//         console.error(error);
//         setError('Не удалось загрузить новости. Пожалуйста, попробуйте позже.')
//     } finally {
//         setIsLoading(false)
//     }
// }
// const fetchCategories = async () => {
//     try {
//         const response = await getCategories()
//         setCategories(['All', ...response.categories])
//     } catch (error) {
//         console.error(error);
//     }
// }
// useEffect(() => {
//     fetchCategories()
// }, [])
// useEffect(() => {
//     fetchNews(currentPage)
// }, [currentPage, selectedCategory, debouncedKeyWords])