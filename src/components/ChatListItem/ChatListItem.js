import styles from './ChatListItem.module.css'


const ChatListItem = ({chatName, text, src, onClick, time}) => {
    return(
        <li onClick={onClick}>
        <div className={styles.itemWrapper}>
           <div className={styles.avatarWrapper}><img className={styles.avatar} src={src} alt="Аватар"/>
            <span className={styles.time}>{time}</span>
           </div>
            <div>
            <p className={styles.chatName}>{chatName}</p>
            <p className={styles.messageText}>{text}</p>
            </div>
        </div>
        </li>
    )
}
export default ChatListItem