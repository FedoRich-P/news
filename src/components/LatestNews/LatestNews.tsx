import s from './LatestNews.module.scss';
import { BannersListWithSkeleton } from '../BannersList/BannersList.tsx';
import { getLatestNews } from '../../api/apiNews.ts';
import { useFetch } from '../../helpers/hooks/useFetch.ts';
import { NewsApiResponse } from '../../interfaces/interfaces.ts';

export const LatestNews = () => {
  const {data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews)
  return (
    <section className={s.section}>
      <BannersListWithSkeleton banners={data && data.news}  isLoading={isLoading}/>
    </section>
  );
};

// type BannersListProps = {
//   banners: ArticleFromServer[] | null ;
//   isLoading: boolean;
// }