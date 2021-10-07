import {createSlice } from '@reduxjs/toolkit'

export const currentUserDataSlice = createSlice({
    name: 'currentUserData',
    initialState: {
        value: {
            userEmail: '',
            userPassword: ''
        }
    },
    reducers: {
        addCurrentUserData: (state, action) => {
                state.value = action.payload
            }
        },
    })

export const {addCurrentUserData} = currentUserDataSlice.actions
export default currentUserDataSlice.reducer