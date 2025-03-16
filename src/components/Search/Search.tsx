import s from './Search.module.scss';
import {ChangeEvent} from "react";

export const Search = ({ keywords, setKeywords }: SearchProps) => {

    function onSearchChange(e: ChangeEvent<HTMLInputElement>) {
        setKeywords(e.currentTarget.value)
    }

  return (
    <div className={s.search}>
      <input type="text"
             className={s.input}
             value={keywords}
             onChange={onSearchChange} />
    </div>
  );
};

type SearchProps = {
    keywords: string;
    setKeywords: (keywords: string) => void;
}