import s from './NewsList.module.scss';
import { NewsItem } from '../NewsItem/NewsItem.tsx';
import { withSkeleton } from '../../helpers/hocs/withSkeleton.tsx';
import { INews } from '../../interfaces/interfaces.ts';

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className={s.list}>
      {news && news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export const NewsListWithSkeleton = withSkeleton<NewsListProps>({ Component: NewsList, type: 'item',count: 10})

type NewsListProps = {
  news?: INews[] | null;
}