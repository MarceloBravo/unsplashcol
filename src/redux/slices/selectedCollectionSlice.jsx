import { createSlice } from "@reduxjs/toolkit";

 export const SelectedCollectionSlice = createSlice({    
    name: 'SelectedCollectionSlice',
    
    initialState: {id: null, title: '', cantPhotos: 0, photos: []},

    reducers: {
        
        setCollectionPhotos: (state, action) => {
            state.photos = action.payload.photos
        },

        setData: (state, action) => {
            state.id = action.payload.id
            state.cantPhotos = action.payload.cantPhotos
            state.photos = action.payload.photos
            state.title = action.payload.title
        },

        clearData: (state) => {
            state.id = null
            state.cantPhotos = 0
            state.photos = []
        }
    }

})

export const { setCollectionPhotos, setData, clearData } = SelectedCollectionSlice.actions
export default SelectedCollectionSlice.reducer