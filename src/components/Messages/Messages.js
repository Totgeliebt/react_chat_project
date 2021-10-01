import styles from './Messages.module.css'

const Messages = ({text, src, isMy}) => {

    return(
        <>
        {  isMy === true ?
            <ul>
                <li>
                    <div className={styles.itemWrapper}>
                        <div>
                            <p className={styles.messageText}>{text}</p>
                        </div>
                        <div className={styles.avatarWrapper}><img className={styles.avatar} src={src} alt="Аватар"/>
                            <span className={styles.time}>12:15</span>
                        </div>
                    </div>
                </li>
            </ul>
            :
            <ul>
                <li>
                    <div className={styles.itemWrapper}>
                        <div className={styles.avatarWrapper}><img className={styles.avatar} src={src}
                                                                   alt="Аватар"/>
                            <span className={styles.time}>12:15</span>
                        </div>
                        <div>
                            <p className={styles.messageText}>{text}</p>
                        </div>
                    </div>
                </li>
            </ul>
        }
        </>
    )
}


export default Messages