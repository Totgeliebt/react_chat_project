import {createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
    value: []
    },
    reducers: {
        addUserData: (state, action) => {
            // state.value = action.payload
            if(action.payload !== state.value.userEmail) {
                state.value.push(action.payload)
            }
        },
    }
})

export const {addUserData} = userDataSlice.actions
export default userDataSlice.reducer