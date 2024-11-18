import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { downloadImage, getUserCollections, removeImageFromCollection } from '../../actions/search'


export const ImagesDetailPageLogic = () => {
    const [ idActiveRow, setIdActiveRow ] = useState(null)
    const [ showModalAddToCollection, setshowModalAddToCollection ] = useState(false)
    const image = useSelector(state => state.SelectedImageSlice.image)
    const collections = useSelector(state => state.CollectionSlice.inCollection)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUserCollections(image.id, true))
    },[image, dispatch])

    const getMonthAndYear = () => {
        const fecha = new Date(image.created_at)
        const nombreMes = fecha.toLocaleString('es-ES', { month: 'long' }); // 'long' para el nombre completo del mes
        return nombreMes + ' ' + fecha.getDate() + ', ' + fecha.getFullYear()
    }

    const handlerSetActive = (id) => {
        setIdActiveRow(id)
    }

    const handlerDownload = () => {
        const imageName = (image.description ? image.description  : 'unsplash-image')
        dispatch(downloadImage(image.id, imageName))
    }

    const handlerRemoveAction = (id) => {
        dispatch(removeImageFromCollection(id, image.id))
    }

    const handlerAddToCollection = () => {
        setshowModalAddToCollection(!showModalAddToCollection)
    }

    const handlerCloseModal = () => {
        setshowModalAddToCollection(false)
    }

  return ({  
        idActiveRow, 
        showModalAddToCollection, 
        image, 
        collections, 
        getMonthAndYear, 
        handlerSetActive, 
        handlerDownload, 
        handlerRemoveAction, 
        handlerAddToCollection, 
        handlerCloseModal
    })
}