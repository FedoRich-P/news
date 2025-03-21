import s from './Header.module.scss';
import { useEffect, useState } from 'react';
import { formatDate } from '../../helpers/formatDate.ts';
import { useTheme } from '../../context/ThemeContext.tsx';

export const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <header className={`${s.header} ${isDark ? s.dark : s.light}`}>
      <h2>Good morning</h2>
      <h1>News</h1>
      <p>{formatDate(currentDate)}</p>
      <label>
        Change theme :
        <select name={''} onChange={toggleTheme} >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </label>
    </header>
  );
};
