import styles from './MainInput.module.css'
import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

 const MainInput = ({placeholderValue, hasEye, icon, width, height, style, onChange, value, type}) => {
     const [isContentShown, setIsContentShown] = useState(true);
     const togglePasswordVisibility = () => {
         setIsContentShown(!isContentShown);
     };
     // type={isContentShown ? "text" : "password"}
     // type === 'password' ? (!isContentShown ? "text" : "password") : 'text'
    return (
        <div style={style} className={styles.inputContainer}><div className={styles.iconContainer} >
            <img width={width} height={height} src={icon} alt={''}/></div>
            <input value={value} onChange={onChange}
                   placeholder={placeholderValue} type={type === 'password' ? (!isContentShown ? "text" : "password") : 'text'}/>
                   {hasEye && <i onClick={togglePasswordVisibility}>{eye}</i>}
            </div>
    )
 }

 export default MainInput