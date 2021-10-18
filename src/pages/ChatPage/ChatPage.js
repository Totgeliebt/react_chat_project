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
import moment from "moment";


const ChatPage = () => {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const currentUserEmail = useSelector((state) => state.currentUserData.value.userEmail)

    const chosenChatId = useSelector((state) => state.chat.chosenChat)
    const store = useSelector((state) => state.chat.value)
    const messagesArray = useSelector((state) => state.chat.value)[chosenChatId]

    const handleInputValue = event => setInputValue(event.target.value)

    const handleAddMessage = (event) => {
        event.preventDefault()

        const value = store.map((item, index) => {
            if (index === chosenChatId) {
                return {
                    chatName: messagesArray.chatName,
                    messages: [...messagesArray.messages, {
                        text: inputValue,
                        user: currentUserEmail,
                        createdAt: moment().format("HH:mm")
                    }]

                }
            }
            return item
        })

        dispatch(addNewMessage(value))
        setInputValue('')
    }

    return (
        <>
            <Header text={"Настройки"} src={settingsImg}/>
            <div className={styles.mainWrapper}>
                <div className={styles.messagesWrapper}>

                    {messagesArray.messages.map((item, index) => {
                        return <Messages isMy={currentUserEmail === item.user} src={userImg} key={index}
                                         text={item.text}
                                         chatName={messagesArray.chatName}
                                         time={item.createdAt}

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

//
//     const [inputValue, setInputValue] = useState('')
//     const handleInputValue = event => setInputValue(event.target.value)
//
//     // const currentUserEmail = useSelector((state)=> state.currentUserData.value.userEmail)
//     const chosenChatId = useSelector((state)=> state.chat.chosenChat)
//     const messagesArray = useSelector((state)=> state.chat.value)[chosenChatId].chatItem.messages
//
//
//     const dispatch = useDispatch()
//
//     const handleAddMessage = (event) => {
//         event.preventDefault()
//         dispatch(addNewMessage(inputValue))
//         setInputValue('')
//     }
//
//     return (
//         <>
//             <Header text={"Настройки"} src={settingsImg}/>
//             <div className={styles.mainWrapper}>
//                 <div className={styles.messagesWrapper}>
//
//                     {  messagesArray.map((item, index) => {
//                             return  <Messages  src={userImg} key={index}
//                                              text={item.inputValue}
//                                             // chatName={chatName}
//                            />
//                          })
//                     }
//
//                 div
//
//         </>
//     )
// }

export default ChatPage