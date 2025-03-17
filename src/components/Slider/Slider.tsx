import s from './Slider.module.scss';
import { cloneElement, ReactElement, RefObject, useRef } from 'react';

export const Slider = ({ children }: SliderProps) => {

  const sliderRef = useRef<HTMLUListElement>(null!);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 150;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 150;
    }
  };


  return (
    <div className={s.slider}>
      <button onClick={scrollLeft} className={s.arrow}>Назад</button>
      {children && cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={s.arrow}>Вперёд</button>
    </div>
  );
};

type SliderProps = {
  children: ReactElement<{ ref?: RefObject<HTMLUListElement> }>;
}

// React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>,