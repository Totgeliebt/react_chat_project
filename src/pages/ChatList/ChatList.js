 import Header from "../../components/Header/Header";
 import settingsImg from '../../components/Header/settingsImg.png'
 import SearchInput from "../../components/SearchInput/SearchInput";
 import styles from './ChatList.module.css'
 import ChatListItem from "../../components/ChatListItem/ChatListItem";
 import MainButton from "../../components/MainButton/MainButton";
 import MainInput from "../../components/MainInput/MainInput";
 import {useState} from "react";
 import {useHistory} from "react-router-dom";
 import {useDispatch} from "react-redux";
 import {addNewChat} from "../../features/ChatSlice/ChatSlice";

 const ChatList = () => {
     const [chatName, setChatName] = useState('')
     const [searchChat, setSearchChat] = useState('')
     const handleChatName = event => setChatName(event.target.value)
     const handleSearchChat = event => setSearchChat(event.target.value)

     const dispatch = useDispatch()
     const history = useHistory()

     const handleCreateChat = () => {
         dispatch(addNewChat({chatName}))

         // history.push(`messages`)
         // setChatName('')
     }
    return(
        <>
        <Header text={"Настройки"} src={settingsImg}/>
            <div className={styles.contentWrapper}>
               <SearchInput  value={searchChat} onChange={handleSearchChat} />

                <ul className={styles.list}>
                    {
                        <ChatListItem chatName={chatName}/>
                    }
                </ul>
                <div className={styles.createChat}>
                    <MainInput value={chatName} onChange={handleChatName} placeholderValue={"Имя чата"}/>
                <MainButton onClick={handleCreateChat} text={"Создать чат"}/>
                </div>
            </div>
        </>
    )
 }

 export default ChatList