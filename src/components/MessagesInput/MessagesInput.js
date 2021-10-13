import styles from './MessagesInput.module.css'


const MessagesInput = ({onClick, onChange, value}) => {


    return(
        <div className={styles.inputWrapper}>
            <input className={styles.messagesInput} value={value} onChange={onChange} placeholder="Введите Ваше сообщение" type="text"/>
            <span className={styles.like}></span>
            <span className={styles.file}></span>
            <div className={styles.send} onClick={onClick}></div>
        </div>
    )
}
export default MessagesInput