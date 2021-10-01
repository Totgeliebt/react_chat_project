import styles from './ResetPassword.module.css'
import MainInput from '../../components/MainInput/MainInput'
import MainButton from '../../components/MainButton/MainButton'
import icon_email from '../RegistrationForm/icon_email.png'
import icon_password from '../RegistrationForm/icon_password.png'

const ResetPassword = () => {
    return(
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.heading}><h1>Восстановление пароля</h1></div>
                <MainInput placeholderValue="Email"  type="text" icon={icon_email} width={30} height={22}/>
                <MainInput style={{marginLeft: '25px'}} placeholderValue="Пароль" hasEye={true} type="password" icon={icon_password} width={23} height={30}/>
                <MainInput style={{marginLeft: '25px'}} placeholderValue="Повторите пароль" hasEye={true} type="password" icon={icon_password} width={23} height={30}/>
                <MainButton text='Восстановить пароль'/>
            </div>
        </div>
    )
}
export default ResetPassword