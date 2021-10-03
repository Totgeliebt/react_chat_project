import styles from './MessagesInput.module.css'

const MessagesInput = () => {
    return(
        <div className={styles.inputWpapper}>
            <input className={styles.input} placeholder="Введите Ваше сообщение" type="text"/>
            <span className={styles.like}></span>
            <span className={styles.file}></span>
            <span className={styles.send}></span>
        </div>
    )
}
export default MessagesInput