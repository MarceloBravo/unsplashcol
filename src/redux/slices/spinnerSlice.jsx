import { createSlice } from '@reduxjs/toolkit'

export const spinnerSlice = createSlice({
    name: 'spinnerSlice',

    initialState: {visible: false, label1: null, label2: null}, 

    reducers: {
        setShowSpinner: (state, action) => {            
            state.visible = true
            state.label1 = action.payload?.label1 ?? null
            state.label2 = action.payload?.label2 ?? null
        },

        hideSpinner: (state) => {
            state.visible = false
            state.label1 = null
            state.label2 = null                  
        }
    }
})

export const { setShowSpinner, hideSpinner } = spinnerSlice.actions
export default spinnerSlice.reducer