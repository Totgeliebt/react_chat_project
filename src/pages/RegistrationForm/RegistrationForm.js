import React from 'react'
import MainInput from "../../components/MainInput/MainInput";
import MainButton from "../../components/MainButton/MainButton";
import styles from './RegistrationForm.module.css'
import icon_user from './icon_user.png'
import icon_email from './icon_email.png'
import icon_password from './icon_password.png'

const RegistrationForm = () => {

    return (
        <>
            <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.heading}><h1>Регистрация</h1></div>
                 <MainInput placeholderValue="Имя" type="text" icon={icon_user} width={30} height={33}/>
                 <MainInput placeholderValue="Фамилия"  type="text" icon={icon_user} width={30} height={33}/>
                 <MainInput placeholderValue="Email"  type="text" icon={icon_email} width={30} height={22}/>
                 <MainInput style={{marginLeft: '25px'}} placeholderValue="Пароль" hasEye={true} type="password" icon={icon_password} width={23} height={30}/>
                 <MainInput style={{marginLeft: '25px'}} placeholderValue="Повторите пароль" hasEye={true} type="password" icon={icon_password} width={23} height={30}/>
                <MainButton text='Зарегестрироваться'/>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm