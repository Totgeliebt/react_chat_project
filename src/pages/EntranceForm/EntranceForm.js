import styles from './EntranceForm.module.css'
import avatar from './avatar.png'
import MainInput from '../../components/MainInput/MainInput'
import MainButton from '../../components/MainButton/MainButton'
import icon_email from '../RegistrationForm/icon_email.png'
import icon_password from '../RegistrationForm/icon_password.png'
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {addCurrentUserData} from "../../features/CurrentUserDataSlice/CurrentUserDataSlice";
import {useDispatch, useSelector} from "react-redux";

const EntranceForm = () => {

    const currentUsersArray = useSelector((state)=> state.userData.value)

    // const currentUserPassword = useSelector((state)=> state.userData.value)
    // console.log(currentUser);
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const handleUserEmail= event => setUserEmail(event.target.value)
    const handleUserPassword= event => setUserPassword(event.target.value)

    const history = useHistory()
    const dispatch = useDispatch()
    const handleEnter = (event) => {
        event.preventDefault()
        const currentUser = currentUsersArray.filter(item => item.userEmail===userEmail)
        console.log(currentUser)
        if(currentUser === 'undefined' && currentUser.length === 0) {
            alert('Такого пользователя не существует, пройдите регистрацию')
            history.push(`registration`);
        } else if (userEmail === currentUser.userEmail && userPassword === currentUser.userPassword) {
            // dispatch(addCurrentUserData({userEmail, userPassword}))
            history.push(`chat`);
        } else if (userEmail === currentUser.userEmail && userPassword !== currentUser.userPassword) {
            alert('Вы ввели неверный пароль!')
        }
        // } else {
        //     alert('Такого пользователя не существует, пройдите регистрацию')
        //     history.push(`registration`);
        // }
    }
    return(
        <form onSubmit={handleEnter} className={styles.container}>
            <div className={styles.form}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="Аватар пользователя"/>
                </div>
                <MainInput value={userEmail} onChange={handleUserEmail} placeholderValue="Email" type="text" icon={icon_email} width={30} height={22}/>
                <MainInput value={userPassword} onChange={handleUserPassword} placeholderValue="Пароль" style={{marginLeft: '25px'}} hasEye={true} type="password" icon={icon_password} width={23} height={30}/>
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