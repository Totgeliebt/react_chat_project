 import Header from "../../components/Header/Header";
 import settingsImg from '../../components/Header/settingsImg.png'
 import SearchInput from "../../components/SearchInput/SearchInput";
 import styles from './ChatList.module.css'
 import ChatListItem from "../../components/ChatListItem/ChatListItem";
 import MainButton from "../../components/MainButton/MainButton";
 import MainInput from "../../components/MainInput/MainInput";
 import {useState} from "react";

 const ChatList = () => {
     const [chatName, setChatName] = useState('')
     const [searchChat, setSearchChat] = useState('')
     const handleChatName = event => setChatName(event.target.value)
     const handleSearchChat = event => setSearchChat(event.target.value)

    return(
        <>
        <Header text={"Настройки"} src={settingsImg}/>
            <div className={styles.contentWrapper}>
               <SearchInput  value={searchChat} onChange={handleSearchChat} />

                <ul className={styles.list}>
                    <ChatListItem/>
                    <ChatListItem/>
                </ul>
                <div className={styles.createChat}>
                <MainButton text={"Создать чат"}/>
                <MainInput value={chatName} onChange={handleChatName}placeholderValue={"Имя чата"}/>
                </div>
            </div>
        </>
    )
 }

 export default ChatList