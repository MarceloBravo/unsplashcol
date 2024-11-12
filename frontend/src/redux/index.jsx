import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './slices/searchSlice'
import messageSlice from './slices/errorSlices'
import SelectedImageSlice from './slices/selectedImageSlice'
import CollectionSlice from './slices/collectionsSlice'


export default configureStore({
    reducer: {
        searchSlice,
        messageSlice,
        SelectedImageSlice,
        CollectionSlice
    }
})
