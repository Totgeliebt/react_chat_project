import styles from './MainButton.module.css'
const MainButton = ({text}) => {

    return (
        <button className={styles.button}>{text}</button>
    )
}

export default MainButton