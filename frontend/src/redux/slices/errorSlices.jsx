import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'messageSlice',

    initialState: {message: null, code: null, detail: null, type: null},

    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload.message
            state.code = action.payload.code
            state.detail = action.payload.detail
            state.type = action.payload.type
        },
        clearMessage: (state) =>{
            state.message = null
            state.code = null
            state.detail = null
        }
    }
})

export const { setMessage, clearMessage } = messageSlice.actions
export default messageSlice.reducer