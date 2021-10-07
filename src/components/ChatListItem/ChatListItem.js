import styles from './ChatListItem.module.css'
import userAvatar from '../../pages/ChatList/userAvatar.png'

const ChatListItem = ({chatName}) => {
    return(
        <li>
        <div className={styles.itemWrapper}>
           <div className={styles.avatarWrapper}><img className={styles.avatar} src={userAvatar} alt="Аватар"/>
            <span className={styles.time}>12:15</span>
           </div>
            <div>
            <p className={styles.chatName}>{chatName}</p>
            <p className={styles.messageText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
            </div>
        </div>
        </li>
    )
}
export default ChatListItem