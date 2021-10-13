import {createSlice } from '@reduxjs/toolkit'

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        value: []
    },
    reducers: {
        addNewMessage: (state, action) => {
            state.value.push(action.payload)
        }
    }
})
export const {addNewMessage} = messagesSlice.actions
export default messagesSlice.reducer