import s from './Image.module.scss';

export const Image = ({image, alt}: ImageProps) => {
    return (
        <div className={s.wrapper}>
            {image ? <img src={image} alt={`${alt} - image`} className={s.image}/> : "There are no images"}
        </div>
    )

};

type ImageProps = {
    image: string | undefined;
    alt: string;
}