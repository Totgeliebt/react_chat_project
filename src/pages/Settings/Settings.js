import Header from "../../components/Header/Header";
import saveImg from "../../components/Header/saveImg.png";
import styles from './Settings.module.css'
import userAvatarImg from './userAvatarImg.png'
import {useSelector} from "react-redux";

const Settings = () => {


 const currentUserName = useSelector((state)=> state.currentUserData.value.userName)
 const currentUserLastName = useSelector((state)=> state.currentUserData.value.userLastName)
 const currentUserEmail = useSelector((state)=> state.currentUserData.value.userEmail)



    return(
        <>
        <Header text={"Сохранить"} src={saveImg}/>
       <div className={styles.settingsWrapper}>
           <div className={styles.imageContainer}>
               <img className={styles.userAvatarImg} src={userAvatarImg} alt=""/>
               <p className={styles.imageText}>Изменить фото</p>
           </div>
            <div className={styles.settingsContainer}>
                <div className={styles.inputContainer}><input disabled className={styles.settingsInput} type="text" placeholder={currentUserName}/><span className={styles.pencil}></span></div>
                <div className={styles.inputContainer}><input disabled className={styles.settingsInput} type="text" placeholder={currentUserLastName}/><span className={styles.pencil}></span></div>
                <div className={styles.inputContainer}><input disabled className={styles.settingsInput} type="email" placeholder={currentUserEmail}/><span className={styles.pencil}></span></div>
                <button className={styles.buttonSaveChanges}>Редактировать</button>
            </div>
       </div>
        </>
    )
}

export default Settings