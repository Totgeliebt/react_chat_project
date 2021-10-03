import styles from './MainInput.module.css'
import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

 const MainInput = ({placeholderValue, hasEye, icon, width, height, style}) => {
     const [isContentShown, setIsContentShown] = useState(true);
     const togglePasswordVisiblity = () => {
         setIsContentShown(!isContentShown);
     };

    return (
        <div style={style} className={styles.inputContainer}><div className={styles.iconContainer} >
            <img width={width} height={height} src={icon} alt={''}/></div>
            <input type={isContentShown ? "text" : "password"}
                   placeholder={placeholderValue}/>
                   {hasEye && <i onClick={togglePasswordVisiblity}>{eye}</i>}
            </div>
    )
 }

 export default MainInput