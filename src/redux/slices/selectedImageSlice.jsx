import { createSlice } from "@reduxjs/toolkit";

 export const SelectedImageSlice = createSlice({    
    name: 'SelectedImageSlice',
    
    initialState: {image: null},

    reducers: {
        setImage: (state, action) => {
            state.image = action.payload.image
        },

        clearImage: (state) => {
            state.image = null
        }
    }

})

export const { setImage, clearImage } = SelectedImageSlice.actions
export default SelectedImageSlice.reducer