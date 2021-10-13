import styles from './MainInput.module.css'
import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


 const MainInput = ({placeholderValue, hasEye, icon, width, height, style, onChange, value}) => {
     const [isContentShown, setIsContentShown] = useState(!hasEye);
     const togglePasswordVisibility = () => {
         setIsContentShown(!isContentShown);
     };

    return (
        <div style={style} className={styles.inputContainer}><div className={styles.iconContainer} >
            <img width={width} height={height} src={icon} alt={''}/></div>
            <input className={styles.input} value={value} onChange={onChange} type={isContentShown ? "text" : "password"}
                   placeholder={placeholderValue} />
                   {hasEye && <i onClick={togglePasswordVisibility}><FontAwesomeIcon icon={faEye} /></i>}
            </div>
    )
 }

 export default MainInput