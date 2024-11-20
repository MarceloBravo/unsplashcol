import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { downloadImage, getUserCollections, removeImageFromCollection } from '../../actions/search'
import { hideSpinner, setShowSpinner } from '../../redux/slices/spinnerSlice';
import { clearResult } from '../../redux/slices/searchSlice';
import { useNavigate } from 'react-router-dom';


export const ImagesDetailPageLogic = () => {
    const [ idActiveRow, setIdActiveRow ] = useState(null)  //Almacena eel código de la colección seleccionada por el usuario para luego poder ´manipular esa colección
    const visible = useSelector(state => state.spinnerSlice.visible)  //Obtiene el valor que indica si el spinner se encuentra visible o no
    const [ showModalAddToCollection, setshowModalAddToCollection ] = useState(false)
    const [ prevCollection, setPrevCollection ] = useState(null)
    const image = useSelector(state => state.SelectedImageSlice.image)
    const collections = useSelector(state => state.CollectionSlice.inCollection)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(image){
            dispatch(getUserCollections(image.id))    //Obtiene la colección de imágenes donde la imágen se encuentra agregada (argumento true)
        }else{
            navigate('/')
        }
        dispatch(clearResult())
        // eslint-disable-next-line
    },[image])


    useEffect(() => {
        if(visible){
            const timer = setTimeout(() => {
                dispatch(hideSpinner())
                dispatch(getUserCollections(image.id))    //Obtiene la colección de imágenes donde la imágen se encuentra agregada (argumento true)
            }, 5000);
        
            return () => clearTimeout(timer)
        }
        // eslint-disable-next-line
    }, [visible])


    useEffect(() => {
        if(prevCollection !== null && JSON.stringify(prevCollection) === JSON.stringify(collections)){
            dispatch(setShowSpinner({label1: 'Estamos actualizando el listado de colecciones.', label2: 'Esto podría tardar unos segundos...'}))
        }
        // eslint-disable-next-line
    },[collections])


    //Finalidad retornar un string con la fecha en formato nombre mes día año completo
    const getMonthAndYear = () => {
        const fecha = new Date(image.created_at)
        const nombreMes = fecha.toLocaleString('es-ES', { month: 'long' }); // 'long' para el nombre completo del mes
        return nombreMes + ' ' + fecha.getDate() + ', ' + fecha.getFullYear()
    }

    //Configura el codigo de la colección seleccionada en la constante activeRow
    const handlerSetActive = (id) => {
        setIdActiveRow(id)
    }

    //Eventyo del botón decargar imágen
    const handlerDownload = () => {
        const imageName = (image.description ? image.description  : 'unsplash-image')
        dispatch(downloadImage(image.id, imageName))
    }

    //Evento del botón eliminar imágen de una colección
    const handlerRemoveAction = (id) => {
        setPrevCollection([...collections])
        dispatch(removeImageFromCollection(id, image.id))
    }

    //Evento del botón agregar imágen a una colección
    const handlerAddToCollection = () => {
        setshowModalAddToCollection(!showModalAddToCollection)  //Muestra el modal con un listado de colecciones para seleccionar
    }

    //Evento del botón cerrar modal
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