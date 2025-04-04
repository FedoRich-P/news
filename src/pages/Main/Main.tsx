import s from './Main.module.scss';
import { LatestNews } from '../../components/LatestNews/LatestNews.tsx';
import { NewsByFilters } from '../../components/NewsByFilters/NewsByFilters.tsx';

export const Main = () => {
  return (
    <main className={s.main}>
      <LatestNews />
      <NewsByFilters/>
    </main>
  );
};

// export type ArticleFromServer = {
//   author: string;
//   category: string[];
//   description: string;
//   id: string;
//   image: string | undefined;
//   language: string;
//   published: string;
//   title: string;
//   url: string;
// };