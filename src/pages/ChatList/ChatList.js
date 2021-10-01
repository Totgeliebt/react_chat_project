 import Header from "../../components/Header/Header";
 import settingsImg from '../../components/Header/settingsImg.png'
 import SearchInput from "../../components/SearchInput/SearchInput";
 import styles from './ChatList.module.css'
 import ChatListItem from "../../components/ChatListItem/ChatListItem";
 import MainButton from "../../components/MainButton/MainButton";
 import MainInput from "../../components/MainInput/MainInput";

 const ChatList = () => {
    return(
        <>
        <Header text={"Настройки"} src={settingsImg}/>
            <div className={styles.contentWrapper}>
               <SearchInput/>

                <ul className={styles.list}>
                    <ChatListItem/>
                    <ChatListItem/>
                </ul>
                <div className={styles.createChat}>
                <MainButton text={"Создать чат"}/>
                <MainInput placeholderValue={"Имя чата"}/>
                </div>
            </div>
        </>
    )
 }

 export default ChatList