import styles from './ResetPassword.module.css'
import MainInput from '../../components/MainInput/MainInput'
import MainButton from '../../components/MainButton/MainButton'
import icon_email from '../RegistrationForm/icon_email.png'
import icon_password from '../RegistrationForm/icon_password.png'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetUserPassword} from "../../features/userDataSlice/userDataSlice";
import {useHistory} from "react-router-dom";

const ResetPassword = () => {

    const currentUsersArray = useSelector((state)=> state.userData.value)
    const history = useHistory()
    const dispatch = useDispatch()

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [repeatUserPassword, setRepeatUserPassword] = useState('')
    const handleUserEmail= event => setUserEmail(event.target.value)
    const handleUserPassword= event => setUserPassword(event.target.value)
    const handleRepeatUserPassword= event => setRepeatUserPassword(event.target.value)

    const handleUserPasswordChange = (event) => {
        event.preventDefault()
        const currentUserIndex = (currentUsersArray.findIndex(el => el.userEmail === userEmail))
        console.log('currentUserIndex', currentUsersArray[currentUserIndex])
        if(currentUserIndex === -1) {
            alert('Такого пользователя не существует, пройдите регистрацию')
            history.push(`registration`);
        } else if (userPassword !== currentUsersArray[currentUserIndex].userPassword) {
            dispatch(resetUserPassword(userEmail,userPassword))
            console.log(userEmail,userPassword)
            history.push(`chat`);
        } else {
            alert('Вы ввели неверный пароль!')
        }
    }

    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.heading}><h1>Восстановление пароля</h1></div>
                <MainInput value={userEmail} onChange={handleUserEmail} placeholderValue="Email"  type="text" icon={icon_email} width={30} height={22}/>
                <MainInput value={userPassword} onChange={handleUserPassword} style={{marginLeft: '25px'}} placeholderValue="Пароль" hasEye={true} type="password" icon={icon_password} width={23} height={30}/>
                <MainInput value={repeatUserPassword} onChange={handleRepeatUserPassword} style={{marginLeft: '25px'}} placeholderValue="Повторите пароль" hasEye={true} type="password" icon={icon_password} width={23} height={30}/>
                <MainButton onClick={handleUserPasswordChange} text='Восстановить пароль'/>
            </form>
        </div>
    )
}
export default ResetPassword