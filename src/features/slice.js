import {createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'userData',
    initialState: {
        value: '',
    },
    reducers: {
        method: (state) => {
            state.value = 1
        }
    }
})

export default slice.reducer