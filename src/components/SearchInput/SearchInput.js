import styles from "../SearchInput/SearchInput.module.css";

const SearchInput = () => {
    return(
        <div className={styles.searchInputWrapper}>
           <div><input className={styles.searchInput} type="text" placeholder="Поиск чата"/></div>
            <div className={styles.searchButtonWrapper}><p className={styles.search}>Найти</p>
                <div className={styles.searchButton}></div>
            </div>
        </div>
    )
}

export default SearchInput