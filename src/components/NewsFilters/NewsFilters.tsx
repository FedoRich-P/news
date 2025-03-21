import { Categories } from '../Categories/Categories.tsx';
import { Search } from '../Search/Search.tsx';
import { useFetch } from '../../helpers/hooks/useFetch.ts';
import { getCategories } from '../../api/apiNews.ts';
import s from './NewsFilters.module.scss'
import { CategoriesApiResponse, IFilters } from '../../interfaces/interfaces.ts';

export const NewsFilters = ({ filters, changeFilter }: NewsFiltersProps) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse,null>( getCategories );

  return (
    <div className={s.filters}>
      {dataCategories && <Categories selectedCategory={filters.category}
                                     categories={dataCategories.categories}
                                     setSelectedCategory={(category) => changeFilter('category', category)} />}
      <Search keywords={filters.keywords}
              setKeywords={(keywords) => changeFilter('keywords', keywords)} />
    </div>);
};

type NewsFiltersProps = {
  filters: IFilters;
  changeFilter: (key: string, value: number | string | null) => void;
};