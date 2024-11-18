import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'messageSlice',

    initialState: [], //{message: null, code: null, detail: null, type: null},

    reducers: {
        setMessage: (state, action) => {
            const title = action.payload.title
            const message = action.payload.message
            const code = action.payload.code
            const detail = action.payload.detail
            const type = action.payload.type
            state.unshift({id: (new Date()).getSeconds(), title ,message, code, detail, type})
        },

        removeMessage: (state, action) => {
            if(action.payload.id){
                state = state.filter( e => e.id !== action.payload.id)
            }else{
                state.shift()
            }
        },

        clearMessage: (state) =>{
            state = []
        }
    }
})

export const { setMessage, removeMessage, clearMessage } = messageSlice.actions
export default messageSlice.reducer