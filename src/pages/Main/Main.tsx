import s from './Main.module.scss';
import { getNews } from '../../api/apiNews.ts';
import { useDebounce } from '../../helpers/hooks/useDebounce.ts';
import { PAGE_SIZE } from '../../constants/constants.ts';
import { useFetch } from '../../helpers/hooks/useFetch.ts';
import { useFilters } from '../../helpers/hooks/useFilters.ts';
import { LatestNews } from '../../components/LatestNews/LatestNews.tsx';
import { NewsByFilters } from '../../components/NewsByFilters/NewsByFilters.tsx';

export const Main = () => {
  const { filters, changeFilter } = useFilters({
    currentPage: 1,
    pageSize: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeyWords = useDebounce({ value: filters.keywords, delay: 1500 });

  const { data, isLoading } = useFetch({
    fetch: getNews,
    params: {
      ...filters,
      keywords: debouncedKeyWords,
    },
  });

  return (
    <main className={s.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />
      <NewsByFilters isLoading={isLoading} news={data && data.news} changeFilter={changeFilter} filters={filters} />
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

// const { data: dataCategories } = useFetch<{ categories: string[] }>({ fetch: getCategories });
//
// const handleNextPage = () => {
//   if (filters.currentPage < TOTAL_PAGES) changeFilter('currentPage', filters.currentPage + 1);
// };
// const handlePrevPage = () => {
//   if (filters.currentPage > TOTAL_PAGES) changeFilter('currentPage', filters.currentPage - 1);
// };
// const handlePageNumber = (pageNumber: number) => {
//   changeFilter('currentPage', pageNumber);
// };

// {dataCategories?.categories && (
//   <Categories categories={dataCategories?.categories}
//               setSelectedCategory={(category) => changeFilter('category', category)}
//               selectedCategory={filters.category} />)}
// <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />
// <Pagination totalPages={TOTAL_PAGES}
//             currentPage={filters.currentPage}
//             handleNextPage={handleNextPage}
//             handlePageNumber={handlePageNumber}
//             handlePrevPage={handlePrevPage} />
// {error && <h2 style={{ color: 'red' }}>{error.message}</h2>}
// <NewsListWithSkeleton isLoading={isLoading} news={data?.news ?? []} />
// <Pagination totalPages={TOTAL_PAGES}
//             currentPage={filters.currentPage}
//             handleNextPage={handleNextPage}
//             handlePageNumber={handlePageNumber}
//             handlePrevPage={handlePrevPage} />