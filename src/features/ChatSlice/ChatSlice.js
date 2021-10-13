import {createSlice} from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chosenChat: '',
        value: [
            {
                chatName: '',
                messages: []
            }

        ]
    },
    reducers: {
        addNewChat: (state, action) => {
            state.value.push(action.payload)
        },
        chosenChat: (state, action) => {
            state.chosenChat = action.payload
        },
        addNewMessage: (state, action) => {
            state.value[chosenChat].messages.push(action.payload)
           //  console.log(state.value[chosenChat])
           // state.value.map((item, index) => {
           //      console.log(index, item)
           //      if (index === chosenChat) {
           //          item.messages.push(action.payload)
           //      }
           //  })
        }
    }
})
export const {addNewChat, addNewMessage, chosenChat} = chatSlice.actions
export default chatSlice.reducer