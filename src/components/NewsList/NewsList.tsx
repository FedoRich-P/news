import s from './NewsList.module.scss';
import {NewsItem} from "../NewsItem/NewsItem.tsx";
import {ArticleFromServer} from "../../pages/Main/Main.tsx";
import {withSkeleton} from "../../helpers/hocs/withSkeleton.tsx";

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
  news : ArticleFromServer[]
}