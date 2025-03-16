import styles from './Pagination.module.scss';

export const Pagination = ({totalPages, handleNextPage, handlePrevPage, handlePageNumber, currentPage}: Pagination) => {
        return (
            <div className={styles.pagination}>
                <button className={styles.button}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                >
                    {'Назад'}
                </button>
                <ul className={styles.list}>
                    {[...Array(totalPages)].map((_, i) => (
                        <li key={i}>
                            <button disabled={currentPage === i + 1}
                                    className={`${styles.pageButton} ${currentPage === i + 1 ? styles.active : ''}`}
                                    onClick={() => handlePageNumber(i + 1)}>
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>

                <button className={styles.button}
                        onClick={handleNextPage}
                        disabled={currentPage >= totalPages}>
                    {'Вперед'}
                </button>
            </div>
        );
    }
;

type Pagination = {
    currentPage: number;
    totalPages: number;
    handleNextPage: () => void;
    handlePrevPage: () => void;
    handlePageNumber: (value: number) => void;
}