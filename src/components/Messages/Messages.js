import styles from './Messages.module.css'
import userImg from "../Header/userImg.png";
import userAvatar from "../../pages/ChatList/userAvatar.png";
import moment from 'moment'
const Messages = ({text, src, isMy,}) => {

    return(
        <>

                    <div className={isMy ? styles.itemWrapperIsMy : styles.itemWrapper}>
                        <div className={styles.avatarWrapper}><img className={styles.avatar} src={src}
                                                                   alt="Аватар"/>
                            <span className={styles.time}>{moment().format("HH:mm")}</span>
                        </div>
                        <div>
                            <p className={styles.messageText}>{text}</p>
                        </div>
                    </div>

            {/*:*/}
            {/*        <div className={styles.itemWrapper}>*/}
            {/*            <div className={styles.avatarWrapper}><img className={styles.avatar} src={src}*/}
            {/*                                                       alt="Аватар"/>*/}
            {/*                <span className={styles.time}>12:15</span>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <p className={styles.messageText}>{text}</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}

        </>
    )
}


export default Messages