import {createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
       value: []
    },
    reducers: {
        addNewChat: (state, action) => {
            state.value = [...state, action.payload]
            // (state, action) => {
            // if(action.payload !== state.value.chatName) {
            //     state.value.push(action.payload)
            }
    }
})
export const {addNewChat} = chatSlice.actions
export default chatSlice.reducer