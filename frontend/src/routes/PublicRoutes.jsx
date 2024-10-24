import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({element: Component, auth}) => {
    return !auth ? Component : <Navigate to="/home"/>
}

export default PublicRoutes