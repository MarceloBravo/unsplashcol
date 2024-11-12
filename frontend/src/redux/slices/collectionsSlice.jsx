import { createSlice } from "@reduxjs/toolkit";

export const CollectionSlice = createSlice({
    name: 'CollectionSlice',

    initialState: {inCollection: [], notInCollection: [], allCollections:[], reload: false},

    reducers: {
        setAllCollections: (state, action) => {
            state.allCollections = action.payload.data
        },

        setInCollection: (state, action) => {
            state.inCollection = action.payload.inCollection
        },

        setNotInCollection: (state, action) => {
            state.notInCollection = action.payload.notInCollection
        },

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


        clearInCollection: (state) => {
            state.inCollection = []
            state.reload = false
        },

        clearNotInCollection: (state) => {
            state.notInCollection = []
            state.reload = false
        },

        setReload:(state, action) =>{
            state.reload = action.payload.reload
        }
    }
})

export const { setInCollection, setNotInCollection, clearInCollection, clearNotInCollection, setRemoveFromCollection, setAddToCollection, setAllCollections, setReload} = CollectionSlice.actions
export default CollectionSlice.reducer