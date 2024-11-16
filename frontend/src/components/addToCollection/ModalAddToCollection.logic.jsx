import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addImageToCollection, createCollection, getUserCollections } from '../../actions/search'

export const ModalAddToCollectionLogic = (closeModal, imageId) => {
    const collection = useSelector(state => state.CollectionSlice.notInCollection)
    const [ value, setValue ] = useState('')
    const [ idActiveRow, setIdActiveRow ] = useState(null)
    const [ dataCollection, setDataCollection ] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserCollections(imageId, false))
    },[imageId, dispatch])

    useEffect(() => {
        setDataCollection(collection.filter(e => e.title.includes(value)))
    },[collection, value])

    const handlerChangeValue = (e) => {
        setValue(e.target.value)
    }
    
    const handlerSetActive = (id) => {
        setIdActiveRow(id)
    }

    const handlerGridAction = (id) => {
        dispatch(addImageToCollection(id, imageId))
        closeModal()
    }

    const handlerNewCollection = () => {
        if(value !== ''){
            dispatch(createCollection(value))
        }else{
            console.log('Debe ingresar el nombre de la colección')
        }
    }
    
  return ({ value, idActiveRow, dataCollection, handlerChangeValue, handlerSetActive, handlerGridAction, handlerNewCollection})
}