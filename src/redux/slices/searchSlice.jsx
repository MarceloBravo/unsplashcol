import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'searchSlice',

    initialState: {result: [], criteria: ''},

    reducers: {
        setResult: (state, action) => {
            state.result = action.payload.result
            state.criteria = action.payload.criteria
        },
        
        clearResult: (state) => {
            state.result = []
            state.criteria = ''
        }
    }
})

export const { setResult, clearResult } = searchSlice.actions
export default searchSlice.reducer