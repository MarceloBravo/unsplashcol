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

        /*
        setRemoveFromCollection: (state, action) => {
            const elem = state.inCollection.reduce((acum,e) => 
                {
                    if(e.id === action.payload.collectionId){
                        e.total_photos--
                        acum = JSON.parse(JSON.stringify(e))
                    }
                    return acum
                }, null
                )
            state.notInCollection.push(elem)
            state.inCollection = state.inCollection.filter(e => e.id !== action.payload.collectionId)
        },

        setAddToCollection: (state, action) => {
            const elem = state.notInCollection.reduce((acum,e) => 
            {
                if(e.id === action.payload.collectionId){
                    e.total_photos++
                    acum = JSON.parse(JSON.stringify(e))
                }
                return acum
            }, null
            )
            state.inCollection.push(elem)
            state.notInCollection = state.notInCollection.filter(e => e.id !== action.payload.collectionId)
        },
        */

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
    //setRemoveFromCollection, 
    //setAddToCollection, 
    setAllCollections,
    setReload,
    setRefresh
} = CollectionSlice.actions
export default CollectionSlice.reducer