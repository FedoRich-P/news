import s from './LatestNews.module.scss';
import { BannersListWithSkeleton } from '../BannersList/BannersList.tsx';
import { useGetLatestNewsQuery } from '../../app/services/newsApi.ts';

export const LatestNews = () => {
  const {data, isLoading } = useGetLatestNewsQuery()
  // const {data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews)

  return (
    <section className={s.section}>
      <BannersListWithSkeleton banners={data && data.news}  isLoading={isLoading}/>
    </section>
  );
};
