import {createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
    value: 'hello'
    },
    reducers: {
    //     addUserData: (state, action) => {
    //         if(action.payload !== state.value.userEmail) {
    //             state.value.push(action.payload)
    //         }
    // //     },
    }
})

export const {addUserData} = userDataSlice.actions
export default userDataSlice.reducer