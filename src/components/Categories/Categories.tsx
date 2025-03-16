import s from './Categories.module.scss';

export const Categories = ({categories, setSelectedCategory, selectedCategory}: CategoriesProps) => {

    return (
        <ul className={s.categories}>
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
};

type CategoriesProps = {
    categories: Array<string>;
    setSelectedCategory: (category: string | null) => void;
    selectedCategory: string | null;
}