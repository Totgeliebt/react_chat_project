import React, {useState} from 'react'
import MainInput from "../../components/MainInput/MainInput";
import MainButton from "../../components/MainButton/MainButton";
import styles from './RegistrationForm.module.css'
import icon_user from './icon_user.png'
import icon_email from './icon_email.png'
import icon_password from './icon_password.png'
import {useDispatch, useSelector} from "react-redux";
import{ addUserData} from '../../features/userDataSlice'

const RegistrationForm = () => {

const userDataName = useSelector((state)=> state.userData.value)

const [userName, setUserName] = useState('')
const [userLastName, setUserLastName] = useState('')
const [userEmail, setUserEmail] = useState('')
const [userPassword, setUserPassword] = useState('')

    const handleUserName= event => setUserName(event.target.value)
    const handleUserLastName= event => setUserLastName(event.target.value)
    const handleUserEmail= event => setUserEmail(event.target.value)
    const handleUserPassword= event => setUserPassword(event.target.value)

const dispatch = useDispatch()
const handleAddUserData = (event) => {
    event.preventDefault()
    dispatch(addUserData)
}

    return (
        <>
            <div className={styles.container}>
            <form onSubmit={handleAddUserData} className={styles.form}>
                <div className={styles.heading}><h1>Регистрация</h1></div>
                 <MainInput value={userName} onChange={handleUserName} placeholderValue="Имя" type="text" icon={icon_user} width={30} height={33}/>
                 <MainInput value={userLastName} onChange={handleUserLastName}  placeholderValue="Фамилия"  type="text" icon={icon_user} width={30} height={33}/>
                 <MainInput value={userEmail} onChange={handleUserEmail}  placeholderValue="Email"  type="text" icon={icon_email} width={30} height={22}/>
                 <MainInput value={userPassword} onChange={handleUserPassword}
                            style={{marginLeft: '25px'}} placeholderValue="Пароль" hasEye={true} type="password" icon={icon_password} width={23} height={30}/>
                 <MainInput value={userPassword} onChange={handleUserPassword}
                            style={{marginLeft: '25px'}} placeholderValue="Повторите пароль" hasEye={true} type="password" icon={icon_password} width={23} height={30}/>
                <MainButton onclick={handleAddUserData} text='Зарегестрироваться'/>
                </form>
            </div>
        </>
    )
}

export default RegistrationForm