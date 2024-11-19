import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRoutes from './PublicRoutes'
import HomePage from '../pages/home/HomePage'
import MainNavBar from '../components/MainNavBar/MainNavBar.jsx'
import SearchResultPage from '../pages/searchResultPage/SearchResultPage.jsx'
import ImagesDetailPage from '../pages/imagesDetail/ImagesDetailPage.jsx'
import CollectionPage from '../pages/collectionPage/CollectionPage.jsx'
import CollectionPhotosPage from '../pages/collectionPhotosPage/CollectionPhotosPage.jsx'
import AlertContainer from '../components/alertContainer/AlertContainer.jsx'
import SpinnerComponent from '../components/spinnerComponent/SpinnerComponent.jsx'

const RoutesApp = () => {
    // eslint-disable-next-line
    const [ isLogued, setIsLogued ] = useState(false)
    
    return (
                <BrowserRouter>
                    <AlertContainer />
                    <SpinnerComponent/>
                    <MainNavBar/>
                    <div className='navbar-space'></div>
                    <Routes>
                        {/*Rutas públicas*/}
                        <Route exact path="/" element={<PublicRoutes element={<HomePage/>} auth={isLogued}/>}/>
                        <Route exact path="/home" element={<PublicRoutes element={<HomePage/>} auth={isLogued}/>}/>
                        <Route exact path="/search_result" element={<PublicRoutes element={<SearchResultPage/>} auth={isLogued}/>}/>
                        <Route exact path="/image_detail" element={<PublicRoutes element={<ImagesDetailPage/>} auth={isLogued}/>}/>
                        <Route exact path="/collections" element={<PublicRoutes element={<CollectionPage/>} auth={isLogued}/>}/>
                        <Route exact path="/collection_photos/:id" element={<PublicRoutes element={<CollectionPhotosPage/>} auth={isLogued}/>}/>
                    </Routes>
                </BrowserRouter>
            )
}

export default RoutesApp