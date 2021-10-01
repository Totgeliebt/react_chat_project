import styles from './EntranceForm.module.css'
import avatar from './avatar.png'
import MainInput from '../../components/MainInput/MainInput'
import MainButton from '../../components/MainButton/MainButton'
import icon_email from '../RegistrationForm/icon_email.png'
import icon_password from '../RegistrationForm/icon_password.png'
import React from 'react'
import {Link} from 'react-router-dom'

const EntranceForm = () => {

    const [emailInputValue, setEmailInputValue] = React.useState('')
    const [passwordInputValue, setPasswordInputValue] = React.useState('')
    const userEmail = '20@mail.ru'
    const userPassword = '12345'

    const handleDataCheck = () => {
        if (userEmail === emailInputValue && userPassword === passwordInputValue){

        }
            }

    return(
        <form onSubmit={handleDataCheck} className={styles.container}>
            <div className={styles.form}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="Аватар пользователя"/>
                </div>
                <MainInput value={emailInputValue} placeholderValue="Email" type="text" icon={icon_email} width={30} height={22}/>
                <MainInput value={passwordInputValue} placeholderValue="Пароль" style={{marginLeft: '25px'}} hasEye={true} type="password" icon={icon_password} width={23} height={30}/>
                <MainButton text='Войти'/>
                <div className={styles.footer}>
                    <div >
                        <Link className={styles.forget_password} to='/password'>Забыли пароль?</Link>
                        </div>
                    <div>
                        <Link to='/registration'>Регистрация</Link>
                        </div>
                </div>
            </div>
        </form>
    )
}

export default EntranceForm