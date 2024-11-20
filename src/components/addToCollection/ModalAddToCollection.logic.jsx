import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addImageToCollection, createCollection, getUserCollections } from '../../actions/search'
import { setMessage } from '../../redux/slices/messageSlice'
import { hideSpinner, setShowSpinner } from '../../redux/slices/spinnerSlice';


//Logica para el modal que contiene el listado de colecciones en las cuales se puede agregar una imágen 
//(mostrado en la página de detalle de la imágen)
export const ModalAddToCollectionLogic = (closeModal, imageId) => {
    const collection = useSelector(state => state.CollectionSlice.notInCollection)  //Array con las colecciones en las que se encuentra agregada la imágen    
    const visible = useSelector(state => state.spinnerSlice.visible)  //Obtiene el valor que indica si el spinner se encuentra visible o no
    const [ value, setValue ] = useState('')    //Texto del cuadro de texto buscar colección
    const [ idActiveRow, setIdActiveRow ] = useState(null)  //ID de la colección seleccionada desde el listado de colecciones
    const [ dataCollection, setDataCollection ] = useState(null)    //Listado que contiene las colecciones existentes en la constante "collection", cuyo nombre coincida con el valor de la constante "value"
    const [ prevCollection, setPrevCollection ] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if(imageId){
            dispatch(getUserCollections(imageId, false))    //Obtiene la colección de imágenes donde la imágen NO se encuentra agregada (argumento false)
        }
        // eslint-disable-next-line
    },[imageId])


    useEffect(() => {
        if(visible){
            const timer = setTimeout(() => {
                dispatch(hideSpinner())
                dispatch(getUserCollections(imageId))
            }, 5000);
        
            return () => clearTimeout(timer)
        }
        // eslint-disable-next-line
    }, [visible])
    

    //Busca una colección con el texto ingresado en el cuadro de texto, cada vez que el cuadro de texto cambia su valor
    useEffect(() => {
        if(prevCollection !== null && JSON.stringify(prevCollection) === JSON.stringify(collection)){
            dispatch(setShowSpinner({label1: 'Estamos actualizando el listado de colecciones.', label2: 'Esto podría tardar unos segundos...'}))
        }else{
            setPrevCollection(null)
            setDataCollection(collection.filter(e => e.title.includes(value)))
        }
        // eslint-disable-next-line
    },[collection, value])

    //Evento del cuadro de texto de búsqueda de colecciones
    const handlerChangeValue = (e) => {
        setValue(e.target.value)
    }
    
    //Configura, en la constante "active", el código de la colección seleccionada por el usuario desde la lista de colecciones
    //Param id: código de la colección seleccionada por el usuario
    const handlerSetActive = (id) => {
        setIdActiveRow(id)
    }

    //Función para el evento Click, en el cual se agrega una imágen a la colección seleccionada por el usuario
    //Param id: código de la colección a la que se agregará la imágen
    const handlerGridAction = (id) => {
        setPrevCollection([...collection])
        dispatch(addImageToCollection(id, imageId))        
        closeModal()
    }

    //Función asociada al evento click, para crear una nueva colección
    const handlerNewCollection = () => {
        if(value !== ''){
            setPrevCollection([...collection])
            dispatch(createCollection(value))
        }else{
            dispatch(setMessage({title: 'Error', message:  "Debe ingresar el nombre de la colección.", type: 'danger'}))
        }
    }
    
  return ({ 
        value, 
        idActiveRow, 
        dataCollection, 
        handlerChangeValue, 
        handlerSetActive, 
        handlerGridAction, 
        handlerNewCollection
    })
}