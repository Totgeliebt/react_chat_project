import styles from "../SearchInput/SearchInput.module.css";

const SearchInput = ({value, onChange}) => {
    return(
        <div className={styles.searchInputWrapper}>
           <div className={styles.inputContainer}><input value={value} onChange={onChange} className={styles.searchInput} type="text" placeholder="Поиск чата"/></div>
            <div className={styles.searchButtonWrapper}><p className={styles.search}>Найти</p>
                <div className={styles.searchButton}></div>
            </div>
        </div>
    )
}

export default SearchInput