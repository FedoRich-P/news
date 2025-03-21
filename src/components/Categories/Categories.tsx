import s from './Categories.module.scss';
import { forwardRef } from 'react';

  export const Categories = forwardRef<HTMLUListElement, CategoriesProps>(
    ({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (
        <ul ref={ref} className={s.categories}>
            <button className={`${s.item} ${!selectedCategory ? s.active : ''}`}
                    onClick={() => setSelectedCategory(null)}>
                All
            </button>
            {categories?.map(category => (
                <li key={category}>
                    <button className={`${s.item} ${selectedCategory === category ? s.active : ''}`}
                            onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                </li>
            ))}
        </ul>
    );
})

Categories.displayName = 'Categories';

export type CategoriesProps = {
    categories: Array<string>;
    setSelectedCategory: (category: string | null) => void;
    selectedCategory: string | null;
}