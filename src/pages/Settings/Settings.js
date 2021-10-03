import Header from "../../components/Header/Header";
import saveImg from "../../components/Header/saveImg.png";
import styles from './Settings.module.css'
import userAvatarImg from './userAvatarImg.png'

const Settings = () => {
    return(
        <>
        <Header text={"Сохранить"} src={saveImg}/>
       <div className={styles.settingsWrapper}>
           <div className={styles.imageContainer}>
               <img className={styles.userAvatarImg} src={userAvatarImg} alt=""/>
               <p className={styles.imageText}>Изменить фото</p>
           </div>
            <div className={styles.settingsContainer}>
                <div className={styles.inputContainer}><input disabled className={styles.input} type="text" placeholder="Имя"/><span className={styles.pencil}></span></div>
                <div className={styles.inputContainer}><input disabled className={styles.input} type="text" placeholder="Фамилия"/><span className={styles.pencil}></span></div>
                <div className={styles.inputContainer}><input disabled className={styles.input} type="email" placeholder="Email"/><span className={styles.pencil}></span></div>
                <button className={styles.buttonSaveChanges}>Редактировать</button>
            </div>
       </div>
        </>
    )
}

export default Settings