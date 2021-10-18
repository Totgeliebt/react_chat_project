import {createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
    value: []
    },
    reducers: {
        addUserData: (state, action) => {
            if(action.payload !== state.value.userEmail) {
                state.value.push(action.payload)
            }
        },
        resetUserPassword: (state, action) => {
         console.log('action payload ',action.payload)

            state.value = state.value.map(item => item.userEmail === action.payload ? {
                ...item,
                userPassword: item.userPassword}
                : item,
            )

        },
    }
})

export const {addUserData,resetUserPassword} = userDataSlice.actions
export default userDataSlice.reducer