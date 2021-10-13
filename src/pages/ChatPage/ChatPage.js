import styles from './ChatPage.module.css'
import Header from "../../components/Header/Header";
import settingsImg from '../../components/Header/settingsImg.png'
import MessagesInput from "../../components/MessagesInput/MessagesInput";
import Messages from "../../components/Messages/Messages";
import userAvatar from '../ChatList/userAvatar.png'
import {useState} from "react";
import userImg from './../../components/Header/userImg.png'
import {useDispatch, useSelector} from "react-redux";
import {addNewMessage} from "../../features/ChatSlice/ChatSlice";


const ChatPage = () => {

    const [inputValue, setInputValue] = useState('')
    const handleInputValue = event => setInputValue(event.target.value)

    // const currentUserEmail = useSelector((state)=> state.currentUserData.value.userEmail)
    const chosenChatId = useSelector((state)=> state.chat.chosenChat)
    const messagesArray = useSelector((state)=> state.chat.value)[chosenChatId].chatItem.messages


    const dispatch = useDispatch()

    const handleAddMessage = (event) => {
        event.preventDefault()
        dispatch(addNewMessage(inputValue))
        setInputValue('')
    }

    return (
        <>
            <Header text={"Настройки"} src={settingsImg}/>
            <div className={styles.mainWrapper}>
                <div className={styles.messagesWrapper}>

                    {  messagesArray.map((item, index) => {
                            return  <Messages  src={userImg} key={index}
                                             text={item.inputValue}
                                            // chatName={chatName}
                           />
                         })
                    }

                    {/*<Messages isMy={false} src={userAvatar}*/}
                    {/*          text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "}/>*/}
                    {/*<Messages isMy={true} src={userImg}*/}
                    {/*          text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "}/>*/}
                </div>
                <div><MessagesInput value={inputValue} onChange={handleInputValue} onClick={handleAddMessage}/></div>
            </div>

        </>
    )
}

export default ChatPage