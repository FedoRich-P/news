import s from './BannersList.module.scss';
import { withSkeleton } from '../../helpers/hocs/withSkeleton.jsx';
import { NewsBanner } from '../NewsBanner/NewsBanner.tsx';
import { INews } from '../../interfaces/interfaces.ts';

export const BannersList = ({ banners }: BannersListProps) => {
  return (
    <ul className={s.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} banner={banner} />
      ))}
    </ul>
  );
};

export const BannersListWithSkeleton = withSkeleton<BannersListProps>({Component: BannersList, type: 'banner', count: 6, direction: 'row'})

type BannersListProps = {
  banners?: INews[] | null;
}