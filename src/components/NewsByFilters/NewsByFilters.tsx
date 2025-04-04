import s from './NewsByFilters.module.scss';
import { TOTAL_PAGES } from '../../constants/constants.ts';
import { NewsListWithSkeleton } from '../NewsList/NewsList.tsx';
import { NewsFilters } from '../NewsFilters/NewsFilters.tsx';
import { useDebounce } from '../../helpers/hooks/useDebounce.ts';
import { PaginationWrapper } from '../PaginationWrapper/PaginationsWrapper.tsx';
import { useGetNewsQuery } from '../../app/services/newsApi.ts';
import { selectNewsFilters, setFilters } from '../../app/features/news/newsSlice.ts';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';

export const NewsByFilters = () => {
const dispatch = useAppDispatch();
  const filters = useAppSelector(selectNewsFilters)

  const debouncedKeyWords = useDebounce({ value: filters.keywords, delay: 1500 });

  const {data, isLoading} = useGetNewsQuery(
    {
      ...filters,
      keywords: debouncedKeyWords,
    },)

  const handleNextPage = () => {
    if (filters.currentPage < TOTAL_PAGES) {
      dispatch(setFilters({key: 'currentPage', value: filters.currentPage + 1}));
    }
  };

  const handlePrevPage = () => {
    if (filters.currentPage > 1) {
      dispatch(setFilters({key: 'currentPage', value: filters.currentPage - 1}));
    }
  };

  const handlePageNumber = (pageNumber: number) => {
    dispatch(setFilters({key: 'currentPage', value: pageNumber}));
  };

  return (
    <section className={s.section}>

      <NewsFilters filters={filters} />
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
