import styles from './MainButton.module.css'
const MainButton = ({text, onClick}) => {

    return (
        <button onClick={onClick} className={styles.button}>{text}</button>
    )
}

export default MainButton