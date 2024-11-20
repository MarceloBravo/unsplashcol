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
            navigate('/')   //Si no se recibe una imágen, entonces se redirecciona a la págima home
        }
        dispatch(clearResult()) //Borra el resultado de la búsqueda y el criterio de búsqueda del store (searchSlice)
        // eslint-disable-next-line
    },[image])


    //Se encarga de actualizar el listado de colecciones en las cuales la imágenes se encuentra agregada
    //Se realiza con un retraso de 5 segundos ya que el API de unsplash no actualiza inmediatamente las colecciones
    //Este hook sólo se ejecuta si el spinner se encuentra visible
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

    //Compara el contenido de las colección de imágenes antes de agregar la imágen y con el listado recibido desde unsplash 
    //después de haber agregado la imágen a una colección, si el contenido es igual, quiere significa que unsplash no ha 
    //actualizado aún las colecciones, con lo que se muestra nuevamente el spinner para hacer una nueva petición de colecciones
    //desde unsplash
    useEffect(() => {
        if(prevCollection !== null && JSON.stringify(prevCollection) === JSON.stringify(collections)){
            dispatch(setShowSpinner({label1: 'Estamos actualizando el listado de colecciones.', label2: 'Esto está tardando más de los esperado, pero ya falta poco...'}))
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