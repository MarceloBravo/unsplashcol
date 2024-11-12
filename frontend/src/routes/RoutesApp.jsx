import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRoutes from './PublicRoutes'
import HomePage from '../pages/home/HomePage'
import MainNavBar from '../components/MainNavBar/MainNavBar.jsx'
import SearchResultPage from '../pages/searchResultPage/SearchResultPage.jsx'
import ImagesDetailPage from '../pages/imagesDetail/ImagesDetailPage.jsx'

const RoutesApp = () => {
    const [ isLogued, setIsLogued ] = useState(false)
    
    return (
                <BrowserRouter>
                    <MainNavBar/>
                    <Routes>
                        {/*Rutas públicas*/}
                        <Route exact path="/" element={<PublicRoutes element={<HomePage/>} auth={isLogued}/>}/>
                        <Route exact path="/home" element={<PublicRoutes element={<HomePage/>} auth={isLogued}/>}/>
                        <Route exact path="/search_result" element={<PublicRoutes element={<SearchResultPage/>} auth={isLogued}/>}/>
                        <Route exact path="/image_detail" element={<PublicRoutes element={<ImagesDetailPage/>} auth={isLogued}/>}/>
                    </Routes>
                </BrowserRouter>
            )
}

export default RoutesApp