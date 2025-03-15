import s from './Skeleton.module.scss'

export const Skeleton = ({ count = 1, type = 'banner', direction = 'column' }) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === 'column' ? s.columnList : s.rowList}>
          {[...Array(count)].map((_, i) => (
            <li key={i}
                className={type === 'banner' ? s.banner : s.item}
            ></li>
          ))}
        </ul>
      ) : <li
        className={type === 'banner' ? s.banner : s.item}
      ></li>
      }
    </>
  );
};