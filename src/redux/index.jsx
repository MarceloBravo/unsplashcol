import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './slices/searchSlice'
import messageSlice from './slices/messageSlice'
import SelectedImageSlice from './slices/selectedImageSlice'
import CollectionSlice from './slices/collectionsSlice'
import SelectedCollectionSlice from './slices/selectedCollectionSlice'
import spinnerSlice from './slices/spinnerSlice'


export default configureStore({
    reducer: {
        searchSlice,
        messageSlice,
        SelectedImageSlice,
        CollectionSlice,
        SelectedCollectionSlice,
        spinnerSlice
    }
})

