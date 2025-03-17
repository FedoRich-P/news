import s from './NewsByFilters.module.scss';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants.ts';
import { NewsListWithSkeleton } from '../NewsList/NewsList.tsx';
import { NewsFilters } from '../NewsFilters/NewsFilters.tsx';
import { getNews } from '../../api/apiNews.ts';
import { useFilters } from '../../helpers/hooks/useFilters.ts';
import { useDebounce } from '../../helpers/hooks/useDebounce.ts';
import { useFetch } from '../../helpers/hooks/useFetch.ts';
import { PaginationWrapper } from '../PaginationWrapper/PaginationsWrapper.tsx';

export const NewsByFilters = () => {

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

  const handleNextPage = () => {
    if (filters.currentPage < TOTAL_PAGES) changeFilter('currentPage', filters.currentPage + 1);
  };

  const handlePrevPage = () => {
    if (filters.currentPage > 1) changeFilter('currentPage', filters.currentPage - 1);
  };

  const handlePageNumber = (pageNumber: number) => {
    changeFilter('currentPage', pageNumber);
  };

  return (
    <section className={s.section}>

      <NewsFilters changeFilter={changeFilter} filters={filters} />
      <PaginationWrapper top
                         bottom
                         totalPages={TOTAL_PAGES}
                         handleNextPage={handleNextPage}
                         handlePrevPage={handlePrevPage}
                         handlePageNumber={handlePageNumber}
                         currentPage={filters.currentPage}>
        <NewsListWithSkeleton isLoading={isLoading} news={data && data.news} />
      </PaginationWrapper>

    </section>
  );
};

// type ChangeFilter = (key: string, value: number | string | null) => void;

// type NewsByFiltersProps = {
//   filters: GetNewsProps;
//   changeFilter: ChangeFilter;
//   isLoading: boolean;
//   news: ArticleFromServer[] | null;
// };

// <Pagination totalPages={TOTAL_PAGES}
//             handleNextPage={handleNextPage}
//             handlePrevPage={handlePrevPage}
//             handlePageNumber={handlePageNumber}
//             currentPage={filters.currentPage} />
//
// <Pagination totalPages={TOTAL_PAGES}
//             handleNextPage={handleNextPage}
//             handlePrevPage={handlePrevPage}
//             handlePageNumber={handlePageNumber}
//             currentPage={filters.currentPage} />