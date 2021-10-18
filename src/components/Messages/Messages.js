import styles from './Messages.module.css'
import userImg from "../Header/userImg.png";
import userAvatar from "../../pages/ChatList/userAvatar.png";

const Messages = ({text, src, isMy, chatName, time}) => {

    return (
        <>
            <div className={isMy ? styles.itemWrapperIsMy : styles.itemWrapper}>
                <div className={styles.avatarWrapper}><img className={styles.avatar} src={src}
                                                           alt="Аватар"/>
                    <span className={styles.time}>{time}</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>{chatName}</div>
                    <div>
                        <p className={styles.messageText}>{text}</p>
                    </div>
                </div>
            </div>

            {/*<div className={isMy ? styles.itemWrapperIsMy : styles.itemWrapper}>*/}
            {/*    <div className={styles.avatarWrapper}><img className={styles.avatar} src={src}*/}
            {/*                                               alt="Аватар"/>*/}
            {/*        <span className={styles.time}>{moment().format("HH:mm")}</span>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <p className={styles.messageText}>{text}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    )
}


export default Messages