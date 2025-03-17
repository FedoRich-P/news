import { Categories } from '../Categories/Categories.tsx';
import { Search } from '../Search/Search.tsx';
import { useFetch } from '../../helpers/hooks/useFetch.ts';
import { getCategories, GetNewsProps } from '../../api/apiNews.ts';
import s from './NewsFilters.module.scss'
import { Slider } from '../Slider/Slider.tsx';

export const NewsFilters = ({ filters, changeFilter }: NewsFiltersProps) => {
  const { data: dataCategories } = useFetch<{ categories: string[] }>({ fetch: getCategories });

  return (
    <div className={s.filters}>
      {dataCategories && <Slider>
        <Categories selectedCategory={filters.category}
                    categories={dataCategories.categories}
                    setSelectedCategory={(category) => changeFilter('category', category)} />
      </Slider>}
      <Search keywords={filters.keywords}
              setKeywords={(keywords) => changeFilter('keywords', keywords)} />
    </div>);
};

type NewsFiltersProps = {
  filters: GetNewsProps;
  changeFilter: (key: string, value: number | string | null) => void;
};