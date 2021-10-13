import {createSlice } from '@reduxjs/toolkit'

export const currentUserDataSlice = createSlice({
    name: 'currentUserData',
    initialState: {
        value: []
    },
    reducers: {
        addCurrentUserData: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {addCurrentUserData, addCurrentUserChat} = currentUserDataSlice.actions
export default currentUserDataSlice.reducer