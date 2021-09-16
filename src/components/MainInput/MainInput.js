import styles from './MainInput.module.css'
import React from 'react'

 const MainInput = ({type, placeholderValue, isShowing, icon, width, height}) => {


    return (
        <div className={styles.inputContainer}><div className={styles.iconContainer} >
            <img width={width} height={height} src={icon} alt={''}/></div>
            <input type={type} placeholder={placeholderValue} visibility={isShowing}/>
            </div>
    )
 }

 export default MainInput