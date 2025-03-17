import s from './NewsBanner.module.scss'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.ts";
import {Image} from "../Image/Image.tsx";
import {ArticleFromServer} from "../../pages/Main/Main.tsx";

export const NewsBanner = ({banner}: NewsBannerProps) => {
    return (
        <article className={s.banner}>
            <Image image={banner?.image} alt={banner?.title}/>
            <h3 className={s.title}>{banner?.title}</h3>
            <p className={s.date}>{formatTimeAgo(banner?.published)} by {banner?.author}</p>
        </article>
    );
};

export type NewsBannerProps = {
    banner: Pick<ArticleFromServer, 'title' | 'author' | 'published' | 'image' | 'id'>;
};
