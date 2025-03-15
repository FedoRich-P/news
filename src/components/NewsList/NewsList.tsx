import s from './NewsList.module.scss';
import {NewsItem} from "../NewsItem/NewsItem.tsx";
import {ArticleFromServer} from "../../pages/Main/Main.tsx";

export const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className={s.list}>
      {news && news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

type NewsListProps = {
  news : ArticleFromServer[]
}