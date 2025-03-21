import s from './Search.module.scss';
import {ChangeEvent} from "react";
import { useTheme } from '../../context/ThemeContext.tsx';

export const Search = ({ keywords, setKeywords }: SearchProps) => {
  const { isDark } = useTheme();
    function onSearchChange(e: ChangeEvent<HTMLInputElement>) {
        setKeywords(e.currentTarget.value)
    }

  return (
    <div className={s.search}>
      <input type="text"
             className={`${s.input} ${isDark ? s.dark : s.light}`}
             value={keywords}
             onChange={onSearchChange} />
    </div>
  );
};

type SearchProps = {
    keywords: string;
    setKeywords: (keywords: string) => void;
}