import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PublicRoutes from './PublicRoutes'
import HomePage from '../pages/home/HomePage'
import MainNavBar from '../components/MainNavBar/MainNavBar.jsx'

const RoutesApp = () => {
    const [ isLogued, setIsLogued ] = useState(false)
    
    return (
                <BrowserRouter>
                    <MainNavBar/>
                    <Routes>
                        {/*Rutas públicas*/}
                        <Route exact path="/" element={<PublicRoutes element={<HomePage/>} auth={isLogued}/>}/>
                    </Routes>
                </BrowserRouter>
            )
}

export default RoutesApp