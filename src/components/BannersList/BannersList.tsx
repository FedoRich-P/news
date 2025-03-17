import s from './BannersList.module.scss';
import { withSkeleton } from '../../helpers/hocs/withSkeleton.jsx';
import { NewsBanner } from '../NewsBanner/NewsBanner.tsx';
import { ArticleFromServer } from '../../pages/Main/Main.tsx';

export const BannersList = ({ banners }: BannersListProps) => {
  return (
    <ul className={s.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} banner={banner} />
      ))}
    </ul>
  );
};

export const BannersListWithSkeleton = withSkeleton({Component: BannersList, type: 'banner', count: 6, direction: 'row'})

type BannersListProps = {
  banners: Pick<ArticleFromServer, 'title' | 'author' | 'published' | 'image' | 'id'>[] | null;
}