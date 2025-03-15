import s from './Header.module.scss'
import {useEffect, useState} from "react";
import {formatDate} from "../../helpers/formatDate.ts";

export const Header = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className={s.header}>
            <h2>Good morning</h2>
            <h1>News</h1>
            <p>{formatDate(currentDate)}</p>
        </header>
    );
};