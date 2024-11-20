import { createSlice } from "@reduxjs/toolkit";

export const CollectionSlice = createSlice({
    name: 'CollectionSlice',

    initialState: {
            inCollection: [], 
            notInCollection: [], 
            allCollections:[],
            refresh: false
        },

    reducers: {
        setAllCollections: (state, action) => {
            state.allCollections = action.payload.data
        },

        setInCollection: (state, action) => {
            state.inCollection = action.payload.inCollection
        },

        setRefresh: (state, action) => {
            state.refresh = action.payload.refresh
        },

        setNotInCollection: (state, action) => {
            state.notInCollection = action.payload.notInCollection
        },

        resetCollections: (state) => {
            state.inCollection = []
            state.notInCollection = []
        }
    }
})

export const { 
    setInCollection, 
    setNotInCollection, 
    resetCollections, 
    setAllCollections,
    setReload,
    setRefresh
} = CollectionSlice.actions
export default CollectionSlice.reducer