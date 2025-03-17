import s from './NewsByFilters.module.scss';
import { TOTAL_PAGES } from '../../constants/constants.ts';
import { ArticleFromServer } from '../../pages/Main/Main.tsx';
import { Pagination } from '../Pagination/Pagination.tsx';
import { NewsListWithSkeleton } from '../NewsList/NewsList.tsx';
import { NewsFilters } from '../NewsFilters/NewsFilters.tsx';
import { GetNewsProps } from '../../api/apiNews.ts';

export const NewsByFilters = ({ filters, changeFilter, isLoading, news }: NewsByFiltersProps) => {

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
      <Pagination totalPages={TOTAL_PAGES}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  handlePageNumber={handlePageNumber}
                  currentPage={filters.currentPage} />
      <NewsListWithSkeleton isLoading={isLoading}
                            news={news} />
      <Pagination totalPages={TOTAL_PAGES}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  handlePageNumber={handlePageNumber}
                  currentPage={filters.currentPage} />
    </section>
  );
};

type ChangeFilter = (key: string, value: number | string | null) => void;

type NewsByFiltersProps = {
  filters: GetNewsProps;
  changeFilter: ChangeFilter;
  isLoading: boolean;
  news: ArticleFromServer[] | null;
};