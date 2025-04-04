import { useCallback } from 'react';
import { Categories } from '../Categories/Categories';
import { Search } from '../Search/Search';
import s from './NewsFilters.module.scss';
import { IFilters } from '../../interfaces/interfaces';
import { Slider } from '../Slider/Slider';
import { useGetCategoriesQuery } from '../../app/services/newsApi';
import { setFilters } from '../../app/features/news/newsSlice';
import { useAppDispatch } from '../../app/hooks';

export const NewsFilters = ({ filters: { category, keywords } }: NewsFiltersProps) => {
  const dispatch = useAppDispatch();
  const { data: dataCategories, error } = useGetCategoriesQuery();

  const setSelectedCategoryHandler = useCallback((category: string | null) => {
    dispatch(setFilters({ key: 'category', value: category }));
  }, [dispatch]);

  const setKeywordsHandler = useCallback((keywords: string) => {
    dispatch(setFilters({ key: 'keywords', value: keywords }));
  }, [dispatch]);

  if (error) return <div className={s.error}>Ошибка загрузки категорий</div>;

  return (
    <div className={s.filters}>
      <Slider>
        <Categories
          selectedCategory={category}
          categories={dataCategories?.categories || []}
          setSelectedCategory={setSelectedCategoryHandler}
        />
      </Slider>
      )
      <Search keywords={keywords} setKeywords={setKeywordsHandler} />
    </div>
  );
};

type NewsFiltersProps = {
  filters: IFilters;
};