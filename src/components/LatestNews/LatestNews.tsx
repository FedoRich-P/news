import s from './LatestNews.module.scss';
import { BannersListWithSkeleton } from '../BannersList/BannersList.tsx';
import { ArticleFromServer } from '../../pages/Main/Main.tsx';

export const LatestNews = ({banners, isLoading}: BannersListProps) => {
  return (
    <section className={s.section}>
      <BannersListWithSkeleton banners={banners}  isLoading={isLoading}/>
    </section>
  );
};

type BannersListProps = {
  banners: ArticleFromServer[] | null ;
  isLoading: boolean;
}