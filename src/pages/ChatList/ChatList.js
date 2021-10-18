import Header from "../../components/Header/Header";
import settingsImg from '../../components/Header/settingsImg.png'
import SearchInput from "../../components/SearchInput/SearchInput";
import styles from './ChatList.module.css'
import ChatListItem from "../../components/ChatListItem/ChatListItem";
import MainButton from "../../components/MainButton/MainButton";
import MainInput from "../../components/MainInput/MainInput";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addNewChat, chosenChat} from "../../features/ChatSlice/ChatSlice";
import userAvatar from './userAvatar.png'

const ChatList = () => {
    const chatArray = useSelector((state) => state.chat.value)
    const [chosenChatId, setChosenChatId] = useState('')
    const [chatName, setChatName] = useState('')
    const [searchChat, setSearchChat] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    const handleChatName = event => setChatName(event.target.value)
    const handleSearchChat = event => setSearchChat(event.target.value)

    const chatItem = {
        chatName: chatName,
        messages: [],
    }

    const handleCreateChat = () => {
        dispatch(addNewChat(chatItem))
        setChatName('')
    }

    useEffect(() => {
        if (chosenChatId !== '') {
            dispatch(chosenChat(chosenChatId))
            history.push(`messages`)
        }
    }, [chosenChatId])

    const handleGoToMessages = (index) => {
        setChosenChatId(index)
    }

    return (
        <>
            <Header text={"Настройки"} src={settingsImg}/>
            <div className={styles.contentWrapper}>
                <SearchInput value={searchChat} onChange={handleSearchChat}/>

                <ul className={styles.list}>
                    {
                        chatArray.map((item, index) => {
                            return <ChatListItem src={userAvatar} key={index}
                                                 text={item.messages[item.messages.length-1]?.text}
                                                 time={item.createdAt}
                                                 chatName={item.chatName}
                                                 onClick={() => handleGoToMessages(index)}/>;
                        })
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