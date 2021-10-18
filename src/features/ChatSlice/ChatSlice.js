import {createSlice} from '@reduxjs/toolkit'
import moment from "moment";

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chosenChat: '',
        value: [
            // {
            //     // chatName: 'First Chat',
            //     // messages: ['Last message']
            // }
        ]
    },
    reducers: {
        addNewChat: (state, action) => {
            state.value.push({...action.payload, createdAt: moment().format("HH:mm")})
        },
        chosenChat: (state, action) => {
            state.chosenChat = action.payload
        },
        addNewMessage: (state, action) => {
            state.value = action.payload
        }
    }
})
export const {addNewChat, addNewMessage, chosenChat} = chatSlice.actions
export default chatSlice.reducer