import styles from './Header.module.css'
import userImg from './userImg.png'
import {Link} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const Header = ({src, text}) => {
    const currentUserName = useSelector((state)=> state.currentUserData.value.userName)
    return(
        <div className={styles.header}>
            <div className={styles.wrapper}>
            <div className={styles.user}>
                <img className={styles.userImage} src={userImg} alt="Аватар"/>
                <p className={styles.userName}>{currentUserName}</p>
            </div>
            <Link className={styles.settings} to='/settings'>
                <img className={styles.settingsImage} src={src} alt="Настройки"/>
                <p className={styles.settingsText}>{text}</p>
            </Link>
            </div>

            <Link className={styles.exitWrapper} to='/enter'><p className={styles.exit}>Выйти</p>
                <div className={styles.exitButton}></div>
            </Link>

        </div>
    )
}

export default Header